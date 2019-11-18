import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default class CardProject extends Component {

    state = {
        projects: [],
        projectInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/auth/users?page=${page}`);

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
            <>

                <div className="container-cardsProject ">
                    <br id="space" />

                    <h1 className="title-card-project">Ultimos projetos</h1>

                    <div className="bandSpec" >

                        {
                            projects.map(project => (
                                <div className="card-body" key={project._id}>

                                    <Link to={`/project/${project._id}`} className="card-project">
                                        <img className="thumbProject" alt="img-cardSpec" src="https://i.imgur.com/WGVuA2M.png" />
                                        <article>
                                            <h1>{project.nome}</h1>
                                            <span>{project.gitUrl}</span>
                                        </article>
                                    </Link>

                                </div>
                            ))
                        }

                    </div>
                    <div className="actions">
                        <button id="btnPrev" disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <div id="pageCount" >Pagina {projectInfo.page} de {projectInfo.totalPages}</div>
                        <button id="btnNext" disabled={page === projectInfo.totalPages} onClick={this.nextPage}>Proximo</button>
                    </div>
                </div>
            </>
        );
    }
}
