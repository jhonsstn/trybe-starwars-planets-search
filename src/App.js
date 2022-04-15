import React from 'react';
import './App.css';
import { PlanetsContextProvider } from './context/PlanetsContext';
import Header from './layout/Header';
import Main from './layout/Main';

import Footer from './layout/Footer';

function App() {
  return (
    <PlanetsContextProvider>
      <Header />
      <Main />
      <Footer />
    </PlanetsContextProvider>
  );
}

export default App;
