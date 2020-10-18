import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage.component';
import HomePage from './pages/HomePage/HomePage.component';
import Header from './components/Header/Header.component';
import OrderList from './components/OrderList/OrderList.component';
import { checkForUserAuth } from './redux/user/user.actions';

import './App.scss';

const App = ({ checkForUserAuthSession, user }) => {
    useEffect(() => {
        checkForUserAuthSession();
    }, [checkForUserAuthSession]);
    return (
        <div>
            <Header />
            <Switch>
                <Route path = '/auth' render = {
                    () => user ? (<Redirect to = {{pathname: '/'}} />) : (<AuthPage />)
                } />
                <Route path = '/orders' render = { 
                    () => user ? (<OrderList />) : (<Redirect to = {{pathname: '/auth'}} />)
                } />
                <Route path = '/' render = {
                    () => user ? (<HomePage />) : (<Redirect to = {{pathname: '/auth'}} />)
                } />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.loggedInUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkForUserAuthSession: () => dispatch(checkForUserAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
