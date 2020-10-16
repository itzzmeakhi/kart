import React from 'react';
import { useFormsio } from 'react-formsio';

import './SignIn.styles.scss';

const SignIn = () => {
    const { register, formState, isFormValid } = useFormsio();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
    }

    const { userEmail, userPassword } = formState;

    return (
        <div className = 'signin'>

            <form onSubmit = {handleSubmit}>

                <h4> Sign In here...!! </h4>

                <div className = 'input__group'>

                    <input
                        type = 'email'
                        name = 'userEmail'
                        placeholder = 'Your Email'
                        autoComplete = 'off' 
                        className = {`${userEmail?.errors && Object.keys(userEmail.errors).length > 0 ? 'error-fields': ''}`}
                        ref = {
                            register({
                                validators: 'required|email'
                            })
                        } />
                        
                    {userEmail?.errors && Object.keys(userEmail.errors).length > 0 ? (
                        <p>
                            {userEmail?.errors?.required ? 'Email is required' : null}
                            {userEmail?.errors?.email ? 'Invalid Email' : null}
                        </p>
                    ) : null}

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'password'
                        name = 'userPassword'
                        placeholder = 'Your Password'
                        autoComplete = 'off'
                        className = {`${userPassword?.errors && Object.keys(userPassword.errors).length > 0 ? 'error-fields': ''}`}
                        ref = {
                            register({
                                validators: 'required|minLength:8'
                            })
                        } />

                    {userPassword?.errors && Object.keys(userPassword.errors).length > 0 ? (
                        <p>
                            {userPassword?.errors?.required ? 'Password is required' : null}
                            {userPassword?.errors?.minLength ? 'Invalid Password': null}
                        </p>
                    ) : null}

                </div>

                <button
                    disabled = {!isFormValid}
                    type = 'submit'>
                        Login
                </button>

            </form>

        </div>
    )
}

export default SignIn;