import React, { Component } from 'react'
import api from '../../services/api';
import CardInfo from '../../components/CardUserInfo';

import './style.css';

export default class Product extends Component {
    state = {
        project: {},
    };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/auth/users/${id} `);        

        this.setState({ project: response.data });
    }

    render() {
        const { project } = this.state;

        return (

            <>
                <CardInfo infos={project} />
            </>

        );
    }
}