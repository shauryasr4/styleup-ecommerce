import React from 'react';

import './signin-registration-page.style.scss';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const SignInRegistrationPage = () => {
    return (
        <div className='sign-in-container'>
            <div className='sign-in-form-container'>
                <SignInForm />
            </div>
        </div>  
    );
} 

export default SignInRegistrationPage;