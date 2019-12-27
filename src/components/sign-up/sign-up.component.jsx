import React from 'react';

import Forminput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password } = this.state;
        try {
            this.validateUserDetails();
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error.message);
            return;
        }
    }

    validateUserDetails = () => {
        const { displayName, email, password, confirmPassword } = this.state;
        if (!email || !displayName || !password || !confirmPassword) {
            throw new Error('Please fill the required fields.');
        }
        if (password !== confirmPassword) {
            throw new Error('Passwords Do Not Match.');
        }
        return true;
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='form-container'>
                <h2>I don't have an account</h2>
                <span> Sign Up with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <Forminput changeHandler={this.changeHandler} label='Display Name' name='displayName' type='text' value={displayName} />
                    <Forminput changeHandler={this.changeHandler} label='Email' name='email' type='email' value={email} />
                    <Forminput changeHandler={this.changeHandler} label='Password' name='password' type='password' value={password} />
                    <Forminput changeHandler={this.changeHandler} label='Confirm Password' name='confirmPassword' type='password' value={confirmPassword} />
                    <div className='footer'>
                        <CustomButton type='submit'>
                            Register
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
