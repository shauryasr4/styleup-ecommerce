import React from 'react';

import './sign-in-form.style.scss';

import FormInput from '../form-input/form-input.component';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    submitHandler = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''});
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
                </form>
                <input type='submit' value='Submit' />
            </div>
        )
    }
}

export default SignInForm;