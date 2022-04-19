import React from 'react';
import './SocialLogin.css';
import googleLogo from '../../img/google-logo-9824.png'
import githubLogo from '../../img/github-logo.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    if (error || gitError) {
        errorElement = <div>
            <p className='text-danger text-center fs-5 mb-4'>{error?.message}{gitError?.message}</p>
        </div>
    }
    else if(loading || gitLoading){
        return;
    }
    return (
        <div className='row'>
            <div className="row d-flex align-items-center justify-content-center mb-4">
                <div className="col"><hr /></div>
                <div className="col text-center fs-3" style={{color: "cf0a2c"}}>Or</div>
                <div className="col"><hr /></div>
            </div>
            {errorElement}
            <div className="col-12 mb-3 d-flex justify-content-center"><button onClick={() => signInWithGoogle()} className='social-submit border-0'>Continue With <img className='img-fluid' src={googleLogo} width="30px" alt="" /></button></div>
            <div className="col-12 mb-3 d-flex justify-content-center"><button onClick={() => signInWithGithub()} className='social-submit border-0'>Continue With <img className='img-fluid' src={githubLogo} width="30px" alt="" /></button></div>
        </div>
    );
};

export default SocialLogin;