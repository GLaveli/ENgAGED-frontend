import React from 'react';
import Routes from './routes';
import './styleMain.css';


import Header from './components/header';
import Footer from './components/footer';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
