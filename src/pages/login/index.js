import React, { Component } from 'react';

import Login from '../../components/Login';
import RegUder from '../../components/RegUser';

export default class login extends Component {
    render() {
        return (
            <>
                <Login />
                <RegUder />
            </>
        )
    }
}
