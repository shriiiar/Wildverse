import React from 'react';
import './ErrorRoute.css'
import errorVid from '../../vid/yt1s.com - Carregando 99   Error  Gato Gif XD XD XD_360p.mp4'
import HelmetTitle from '../HelmetTitle/HelmetTitle';

const ErrorRoute = () => {
    return (
        <div>
            <HelmetTitle title='Error'></HelmetTitle>
            <div className='error-div text-center'>
                <h1 className='mt-5 error-header'>404 Page Not Found</h1>
                <video class="mt-3" src={errorVid}
                    autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default ErrorRoute;