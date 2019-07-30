import React, { Component } from 'react'
import api from '../../services/api';

export default class Product extends Component {
    state = {
        project: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id} `);

        this.setState({ project: response.data });
    }

    render() {
        const { project } = this.state;

        return (
            <div className="projectInfo" align="center">
                <h1>{project.nome}</h1>
                <p>{project.email}</p>
            </div>
        );
    }
}