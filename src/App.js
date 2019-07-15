import React from 'react';
import Routes from './routes';
import './styleMain.css';


import Header from './components/header';
import MainBanner from './components/mainBanner'
import Footer from './components/footer';
import IntroSpecs from './components/introSpecs';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

//rotas removidas para teste
//<MainBanner />
//<IntroSpecs />
//<Routes />

export default App;
