import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const PrivateRouteb = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/loginb',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);

export default PrivateRouteb;