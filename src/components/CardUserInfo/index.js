import React, { Component } from 'react';

import './style.css';

export default class CardInfo extends Component {

    render() {
        let { _id, nome, gitUrl, facebookUrl, twitterUrl, youotubeUrl, linkedinUrl, email } = this.props.infos;

        return (
            <>
                <div className="body-info">
                    <div className="card">
                        <div className="card-header">
                            <img src="https://i.imgur.com/WGVuA2M.png" alt="Projeto" className="profile-img"></img>
                        </div>
                        <div className="card-body">
                            <p>Autor(a):</p>
                            <p className="full-name"><span className="autorTitle"></span>{nome}</p>

                            <p className="username">ID: {_id}</p>
                            <hr /><br />
                            {
                                email ?
                                    <p className="desc">{email}</p>
                                    :
                                    null
                            }
                            {gitUrl || facebookUrl || twitterUrl || youotubeUrl || linkedinUrl?
                                <p> - ou - </p>
                                :
                                null
                            }
                            <p>
                                {gitUrl ?
                                    <a href={gitUrl} className="social-icon github"><i className="fab fa-github"></i></a>
                                    :
                                    null
                                }{facebookUrl ?
                                    <a href={facebookUrl} className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                                    :
                                    null
                                }{twitterUrl ?
                                    <a href={twitterUrl} className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                                    :
                                    null
                                }{youotubeUrl ?
                                    <a href={youotubeUrl} className="social-icon youtube"><i className="fab fa-youtube"></i></a>
                                    :
                                    null
                                }{linkedinUrl ?
                                    <a href={linkedinUrl} className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>
                                    :
                                    null
                                }
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
