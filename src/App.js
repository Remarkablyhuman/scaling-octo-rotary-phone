import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Progqr from './components/ProgQR';
import Slogan from './components/Slogan';
import Description from './components/Description';
import Faq from './components/FAQ';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <div className='bodyx'>
      <Header />
      <Carousel />
      <Slogan />
      <Progqr />
      <Description />
      <Faq />
      <Team />
      <Footer />
      </div>
    </div>
  );
}

export default App;
