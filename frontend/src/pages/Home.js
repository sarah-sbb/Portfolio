// frontend/src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import '../App.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
