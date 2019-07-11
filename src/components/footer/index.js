import React from 'react';
import './style.css'

let today = new Date().toLocaleDateString().split("/");

const Footer = () => (

    <div id="main-footer">
        <footer className="footer-basic-centered">

            <p className="footer-company-motto">ENgAGED</p>

            <p className="footer-company-name">
                &copy; {today[2]} Todos os direitos reservados <br /> Template made whith <strong className="heart">♥</strong> by G.Laveli
            </p>

        </footer>
    </div>
);

export default Footer;