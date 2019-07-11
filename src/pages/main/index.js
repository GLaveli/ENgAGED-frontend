import React, { Component } from 'react';
import api from '../../services/api'

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
        console.log(projectInfo.pages);
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const { projects, page, projectInfo } = this.state;

        return (
            <div className="container-cards">

                <h1 className="title-card">Ultimos projetos</h1>

                <div className="band">
                    {projects.map(project => (
                        <div className="item-1" key={project._id}>
                            <a href=" " className="card">
                                <img alt="img-card" src="https://wallpapercave.com/wp/nkvkU5T.jpg" className="thumb" />
                                <article>
                                    <h1>{project.projects}</h1>
                                    <p>{project.email}</p>
                                    <span>{project.name}</span>
                                </article>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="actions">
                    <button id="btnPrev" disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                   <div id="pageCount" >Pagina {projectInfo.page} de {projectInfo.totalPages}</div>
                    <button id="btnNext" disabled={page === projectInfo.totalPages} onClick={this.nextPage}>Proximo</button>
                </div>

            </div>
        );
    }
};