import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './style.css'

export default class Main extends Component {
    state = {
        projects: [],
        projectInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/users?page=${page}`);

        const { docs, ...projectInfo } = response.data;

        this.setState({ projects: docs, projectInfo, page })
    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) {
            return;
        }

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, projectInfo } = this.state;

        if (page === projectInfo.pages) return;
        console.log("" + projectInfo.pages);
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const { projects, page, projectInfo } = this.state;

        return (

            <div className="ContainerAllCards">

                <div className="container">
                    <div className="inner-container">

                        <section id="section06" className="demo">

                            <h1 className="title">ENgAGED</h1>
                            <p id="subtitulo">Teste</p>
                            <a id="flip" href=" ">
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

                <div className="container-cardsProject ">
                    <br id="space" />
                    <h1 className="title-card-project">Ultimos projetos</h1>

                    <div className="bandSpec" >

                        {projects.map(project => (
                            <div className="card-body" key={project._id}>

                                <Link to={`/project/${project._id}`} className="card-project">
                                    <img className="thumbProject" alt="img-cardSpec" src="https://i.imgur.com/WGVuA2M.png" />
                                    <article>
                                        <h1>{project.nome}</h1>
                                        <p>{project.email}</p>
                                        <span>{project.giturl}</span>
                                    </article>
                                </Link>

                            </div>
                        ))}
                    </div>

                    <div className="actions">
                        <button id="btnPrev" disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <div id="pageCount" >Pagina {projectInfo.page} de {projectInfo.totalPages}</div>
                        <button id="btnNext" disabled={page === projectInfo.totalPages} onClick={this.nextPage}>Proximo</button>
                    </div>

                </div>

            </div>

        );
    }
};