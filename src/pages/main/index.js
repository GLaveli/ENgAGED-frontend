import React, { Component } from 'react';
import CardProject from '../../components/CardProject';

import './style.css'

export default class Main extends Component {

    render() {

        return (
<>
            <div className="ContainerAllCards">

                <div className="container-card-index">
                    <div className="inner-container">

                        <section id="section06" className="demo">

                            <h1 className="title">ENgAGED</h1>
                            <p id="subtitulo">Desenvolvimento de jogos educacionais para a computação</p>
                            <a id="flip" href=" " alt="suba a pagina!">
                                <span></span></a>

                        </section>

                    </div>
                </div>

                <div className="container-cardsSpec">

                    <br id="space" />
                    <h1 className="title-cardSpec"> Conheça o sistema </h1>

                    <div className="bandSpec">

                        <div className="cardSpec">
                            <img alt="img-cardSpec" src="https://i.imgur.com/aF0iAZC.jpg" className="thumbSpec" />
                            <article>
                                Desenvolva seus projetos em conjunto
                        </article>
                        </div>

                        <div className="cardSpec">
                            <img alt="img-cardSpec" src="https://i.imgur.com/Dai8wk4.jpg" className="thumbSpec" />
                            <article>
                                Crie uma equipe e compartilhe seus projetos
                        </article>
                        </div>

                        <div className="cardSpec">
                            <img alt="img-cardSpec" src="https://i.imgur.com/cyxLgGo.jpg" className="thumbSpec" />
                            <article>
                                Organize e acompanhe o desenvolvimento
                        </article>
                        </div>

                        <div className="cardSpec">
                            <img alt="img-cardSpec" src="https://i.imgur.com/DHk0DkT.jpg" className="thumbSpec" />
                            <article>
                                Publique de forma privada ou publica
                        </article>
                        </div>

                    </div>
                    <br id="space" />
                </div>

                <CardProject />

            </div>
</>
        );
    }
};