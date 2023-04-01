import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductionSchedule from './pages/ProductionSchedule';
import LPPackout from './pages/LPPackout';
import SPPackout from './pages/SPPackout';
import Hoses from './pages/Hoses';

function App() {
  const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: black;
  `

  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    background-color: white;
    max-width: 850px;
    width: 100%;
    padding: 1rem 0;
    height: 100vh;
  `

  return (
    <BackgroundContainer>
      <AppContainer>
        <Header />
        <Router>
          <Routes>
            <Route element={<ProductionSchedule />} path="production-schedule"/>
            <Route element={<LPPackout />} path="/lp-packout"/>
            <Route element={<SPPackout />} path="/sp-packout"/>
            <Route element={<Hoses />} path="/hoses"/>
            <Route element={<Home />} path="/"/>
          </Routes>
        </Router>
        <Footer />
      </AppContainer>
    </BackgroundContainer>
  );
}

export default App;
