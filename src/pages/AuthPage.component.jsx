import React from 'react';

import SignIn from './../components/SignIn/SignIn.component';
import SignUp from './../components/SignUp/SignUp.component';

import './AuthPage.styles.scss';

const AuthPage = () => {
    return (
        <div className = 'AuthPage'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthPage;