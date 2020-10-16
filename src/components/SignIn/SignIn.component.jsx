import React from 'react';

import './SignIn.styles.scss';

const SignIn = () => {
    return (
        <div className = 'signin'>

            <form>

                <h4> Sign In here...!! </h4>

                <div className = 'input__group'>

                    <input
                        type = 'email'
                        name = 'userEmail'
                        placeholder = 'Your Email'
                        autoComplete = 'off' /> 

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'password'
                        name = 'userPassword'
                        placeholder = 'Your Password'
                        autoComplete = 'off' />

                </div>

                <button
                    type = 'submit'>
                        Login
                </button>

            </form>

        </div>
    )
}

export default SignIn;