import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navigation from '../src/components/Nav/Nav';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navigation />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
