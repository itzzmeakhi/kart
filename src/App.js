import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { auth } from './firebase';
import AuthPage from './pages/AuthPage.component';
import Header from './components/Header/Header.component';

import './App.scss';

const App = (props) => {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
        })
    }, [])
    return (
        <div>
            <Header />
            <AuthPage />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App);
