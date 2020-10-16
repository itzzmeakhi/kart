import React from 'react';

import './SignUp.styles.scss';

const SignUp = () => {
    return (
        <div className = 'signup'>

            <form>

                <h4> Signup here...!! </h4>

                <div className = 'input__group'>

                    <input
                        type = 'text'
                        name = 'userName'
                        id = 'userName'
                        placeholder = 'Your Name'
                        autoComplete = 'off' /> 

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'email'
                        name = 'userEmail'
                        id = 'userEmail'
                        placeholder = 'Your Email'
                        autoComplete = 'off' />

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'password'
                        name = 'userPassword'
                        id = 'userPassword'
                        placeholder = 'Your Password'
                        autoComplete = 'off' />

                </div>

                <div className = 'input__group'>

                    <input
                        type = 'text'
                        name = 'userDOB'
                        id = 'userDOB'
                        placeholder = 'Your DOB (DD/MM/YYYY)'
                        autoComplete = 'off' />

                </div>

                <button
                    type = 'submit'>
                        Create an Account!
                </button>

            </form>

        </div>
    )
}

export default SignUp;