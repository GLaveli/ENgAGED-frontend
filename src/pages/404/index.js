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
                        <h2>Pagina não encontrada =/</h2>
                        <p>A página que você está procurando pode ter sido removida!</p>
                        <a href="index.html">Voltar para o inicio</a>
                    </div>

                </div>
            </div>
        );
    }
}