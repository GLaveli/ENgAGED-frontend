import React from 'react';
import './style.css'

let today = new Date().toLocaleDateString().split("/");

const Footer = () => (

    <div className="footer-container">

        <footer className="footer-distributed">

            <div className="footer-content">
                <p className="footer-logo">ENgAGED</p>
                <p className="footer-content"> &copy; {today[2]} Todos os direitos reservados
                <br />
                Template made with <strong className="heart"> ♥ </strong> by G.Laveli </p>
            </div>

        </footer>

    </div>

);

export default Footer;