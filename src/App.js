import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Sujitha7824/React_weather_app">
          Download Source Code
        </a>{" "}
        | Developed by SujithaNuli
       
        
      </div>
    </React.Fragment>
  );
}

// window.addEventListener('DOMContentLoaded', function() {
//   const background = document.getElementById('body');
//   const animation = document.createElement('div');
//   animation.classList.add('body');
//   background.appendChild(animation);
// });

export default App;
