import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const AdminRouteb = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() && isAuth().role === 'admin' ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/signinb',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);

export default AdminRouteb;