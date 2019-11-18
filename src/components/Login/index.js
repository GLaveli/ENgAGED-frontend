import React, { Component } from 'react';

import './style.css';

export default class login extends Component {
    render() {
        return (
            <>
                <div class="login-container" >
                    <a class="links" id="paracadastro"></a>
                    <a class="links" id="paralogin"></a>

                    <div class="content">

                        <div id="login">
                            <form method="post" action="">
                                <h1>Login</h1>
                                <p>
                                    <label for="nome_login">E-mail</label>
                                    <input id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com" />
                                </p>

                                <p>
                                    <label for="password_login">Senha</label>
                                    <input id="password_login" name="password_login" required="required" type="password" placeholder="ex. senha" />
                                </p>

                                <p>
                                    <input type="submit" value="Logar" />
                                </p>

                                <p class="link">
                                    Ainda não tem conta?
                                <a href="#paracadastro">Cadastre-se</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
