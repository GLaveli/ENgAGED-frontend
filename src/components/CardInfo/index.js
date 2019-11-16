import React, { Component } from 'react';

require('./style.css')

export default class CardInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="body-info">
                    <div className="card">
                        <div className="card-header">
                            <img src="https://i.imgur.com/WGVuA2M.png" alt="Projeto" className="profile-img"></img>
                        </div>
                        <div className="card-body">
                            <p className="full-name">{this.props.infos.nome}</p>
                            <p className="username">{this.props.infos._id}</p>
                            <p className="city">{this.props.infos._id}</p>
                            <hr/>
                            <p className="desc">{this.props.infos.email}</p>
                            <p>
                                <a href={this.props.infos._id} className="social-icon github"><i className="fab fa-github"></i></a>
                                <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon youtube"><i className="fab fa-youtube"></i></a>
                                <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="social-icon google-plus"><i className="fab fa-google-plus"></i></a>
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className="col">
                                <p><span className="count"> Projetos: </span></p>
                            </div>
                            <div className="col">
                                <p><span className="count"> Nota: </span></p>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    };
}
