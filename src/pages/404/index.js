import React, { Component } from 'react';

import './style.css'

export default class ErrorNotFound extends Component {

    render() {
        return (
            <div id="notfound">
                <div class="notfound">

                    <div class="notfound-404">
                        <h1>404</h1>
                    </div>

                    <div class="typewriter">
                        <h2>Page not found</h2>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <a href="index.html">Home</a>
                    </div>

                </div>
            </div>
        );
    }
}