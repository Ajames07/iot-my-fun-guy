import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="aboutPage">
      <p>
        My Fun Guy is a low cost, do it yourself, gourmet mushroom growing tracker. Track 
        and perfect your mushroom growing conditions using a Particle Photon with temperature, humidity,
        and air quality sensors, and our software. View your Current Projects with up do date data 
        or Previous Projects to compare conditions and become a mushroom master. 
      </p>
    </div>
  </div>
);

export default AboutPage;
