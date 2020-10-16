import React from 'react';
import { useFormsio } from 'react-formsio';
import { connect } from 'react-redux';

import { signUpStart } from './../../redux/user/user.actions';

import './SignUp.styles.scss';

const SignUp = (props) => {
    const { onSignUp } = props;
    const { register, formState, isFormValid } = useFormsio();

    const { userName, userEmail, userPassword, userDOB } = formState;

    const handleSubmit = event => {
        event.preventDefault();
        onSignUp({
            userName: userName?.value,
            userEmail: userEmail?.value,
            userPassword: userPassword?.value,
            userDOB: userDOB?.value
        });
    }

    return (
        <div className = 'signup'>

            <form onSubmit = {handleSubmit}>

                <h4> Signup here...!! </h4>

                <div className = 'input__group'>

                    <input
                        type = 'text'
                        name = 'userName'
                        id = 'userName'
                        placeholder = 'Your Name'
                        autoComplete = 'off'
                        className = {`${userName?.errors && Object.keys(userName.errors).length > 0 ? 'error-fields': ''}`}
                        ref = {register({
                            validators: 'required|minLength:2'
                        })} /> 

                    {userName?.errors && Object.keys(userName.errors).length > 0 ? (
                        <p>
                            {userName?.errors?.required ? 'Username is required' : null}
                            {userName?.errors?.minLength ? 'Invalid Name' : null}
                        </p>
                    ) : null}

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'email'
                        name = 'userEmail'
                        id = 'userEmail'
                        placeholder = 'Your Email'
                        autoComplete = 'off'
                        className = {`${userEmail?.errors && Object.keys(userEmail.errors).length > 0 ? 'error-fields': ''}`}
                        ref = {register({
                            validators: 'required|email'
                        })} />

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
                        id = 'userPassword'
                        placeholder = 'Your Password'
                        autoComplete = 'off'
                        className = {`${userPassword?.errors && Object.keys(userPassword.errors).length > 0 ? 'error-fields': ''}`}
                        ref = {register({
                            validators: 'required',
                            regexValidators: {
                                passwordStrength: true
                            }
                        })} />

                    {userPassword?.errors && Object.keys(userPassword.errors).length > 0 ? (
                        <p>
                            {userPassword?.errors?.required ? 'Password is required' : null}
                            {userPassword?.errors?.passwordStrength ? 
                                'Use password as a combination of 2 lowercase, 3 uppercase, 2 digits, 1 symbol i.e., * ! @ # $ and 8 digits length.' 
                                : null}
                        </p>
                    ) : null}

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'text'
                        name = 'userDOB'
                        id = 'userDOB'
                        placeholder = 'Your DOB (DD/MM/YYYY)'
                        autoComplete = 'off'
                        className = {`${userDOB?.errors && Object.keys(userDOB.errors).length > 0 ? 'error-fields': ''}`}
                        ref = {register({
                            validators: 'required',
                            regexValidators: {
                                validBirthDate: true
                            }
                        })} />

                    {userDOB?.errors && Object.keys(userDOB.errors).length > 0 ? (
                        <p>
                            {userDOB?.errors?.required ? 'DOB is required' : null}
                            {userDOB?.errors?.validBirthDate ? 'Invalid Birth Date' : null}
                        </p>
                    ) : null}

                </div>

                <button
                    disabled = {!isFormValid}
                    type = 'submit'>
                        Create an Account!
                </button>

            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (userDetails) => dispatch(signUpStart(userDetails))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);