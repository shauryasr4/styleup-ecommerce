import React from 'react';

import './sign-in-form.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitHandler = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error.message);
        }
        this.setState({ email: '', password: '' });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className='formContainer'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput label='email' type='text' name='email' value={email} changeHandler={this.changeHandler} required />
                    <FormInput label='password' type='password' name='password' value={password} changeHandler={this.changeHandler} required />

                    <div className='footer-container'>
                        <CustomButton type='submit' >
                            Sign In
                    </CustomButton>
                        <CustomButton onClick={signInWithGoogle} googleSignInButton >
                            Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm;