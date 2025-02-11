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

                        <div id="cadastro">
                            <form method="post" action="">
                                <h1>Cadastro</h1>

                                <p>
                                    <label for="nome_cad">Seu nome</label>
                                    <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="nome" />
                                </p>

                                <p>
                                    <label for="email_cad">Seu e-mail</label>
                                    <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com" />
                                </p>

                                <p>
                                    <label for="senha_cad">Sua senha</label>
                                    <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="ex. 1234" />
                                </p>

                                <p>
                                    <input type="submit" value="Cadastrar" />
                                </p>

                                <p class="link">
                                    Já tem conta?
                                <a href="#paralogin"> Ir para Login </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
