import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import LoadingScreen from './Components/Loading.js';
import Scene from './Components/Scene.js';
import './App.css';

function App() {
  return (
    <div className="siteWrapper">

      {/* 🌌 3D BACKGROUND */}
      <div className="sceneLayer">
        <Scene />
      </div>

      {/* 🧱 UI LAYER */}
      <div className="uiLayer">

        <LoadingScreen />

        <section>
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </section>

      </div>

    </div>
  );
}

export default App;
