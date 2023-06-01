import React from 'react';
import NavBar from '../components/NavBar';
import Foot from '../components/Footer';
import MainStreaminPage from '../components/MainStreaminPage';

const Streaming = () => {
  return <div>
    <NavBar/>
    <h2>Streaming</h2>
    <MainStreaminPage />
    <Foot/>
  </div>;
};

export default Streaming;
