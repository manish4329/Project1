import { Navbar } from './Navbar';
import React from 'react';

export const About = (props) => {

  return (
    <>
    <Navbar />
    <div id="para1" className="container text-center">
     <p>We are a team of passionate travelers, building a exciting travel app to
        help us uncover and explore places recommended by people we trust and with
        whom we share a similar travel style!</p>
    </div>
    <div className="container">
     <div className="flags">
     <div className="panel">
      <img src="images/intro.png" className="img-thumbnail" alt="intro.png"></img>
        <h2><b>Create your personal travel memoir</b></h2>
        <p>All places you have been to and places you wish to travel to in one place</p>
      </div>
      <div className="panel">
      <img src="images/intro2.png" className="img-thumbnail" alt="intro2.png"></img>
        <h2><b>Ask and share recommendations with friends</b></h2>
        <p>Share with your friends your favorite places and find places for your next trip from people you trust</p>
      </div>
      <div className="panel">
      <img src="images/intro3.png" className="img-thumbnail" alt="intro3.png"></img>
        <h2><b>Get inspired</b></h2>
        <p>Explore places you would otherwise not visit, from people with similar traveling styles as your</p>
      </div>
     </div> 
    </div>
  </>
  );
};
