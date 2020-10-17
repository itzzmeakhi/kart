import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AuthPage from './pages/AuthPage.component';
import Header from './components/Header/Header.component';
import { checkForUserAuth } from './redux/user/user.actions';

import './App.scss';

const App = (props) => {
    const { checkForUserAuthSession } = props;
    useEffect(() => {
        checkForUserAuthSession();
    }, [checkForUserAuthSession]);
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

const mapDispatchToProps = dispatch => {
    return {
        checkForUserAuthSession: () => dispatch(checkForUserAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
