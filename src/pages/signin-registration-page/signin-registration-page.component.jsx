import React from 'react';

import './signin-registration-page.style.scss';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInRegistrationPage = () => {
    return (
        <div className='sign-in-container'>
            <div className='sign-in-form-container'>
                <SignInForm />
            </div>
            <div className='sign-in-form-container'>
                <SignUp />
            </div>
        </div>
    );
}

export default SignInRegistrationPage;