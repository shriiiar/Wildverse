import React from 'react';
import auth from '../../firebase.init';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import UserEmailVer from '../../img/Wavy_Tech-28_Single-10.jpg';

const UserEmailVerification = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    return (
        <div className='text-center' style={{ margin: "100px auto", color: "teal" }}>
            <h1 className='mb-4'>Email Sent</h1>
            <h3 className='mb-4'>Please Verify Your Email</h3>
            <button className='button-33 d-block mx-auto'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >Resend Email Verfification</button>
            <img src={UserEmailVer} className='img-fluid' width='500px' alt="" />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UserEmailVerification;