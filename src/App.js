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
    <MainBanner />
    <IntroSpecs />
    <Routes />
    <Footer />
  </div>
);



export default App;
