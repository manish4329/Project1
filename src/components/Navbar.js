import React from 'react';
export const Navbar=(props)=> {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light">
    <div id="navbar" className="navbar">
    <img src="/images/Logo1.svg" className="img-thumbnails" alt="Logo1.svg"></img>
      <a id='anchor' className="navbar-brand" href="/">
      <h2>BEEN</h2> 
      <h3>THERE</h3></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul id="ulmenu"className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/About"><b>About Us</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Privacy"><b>Privacy Policy</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Terms"><b>Terms Of Use</b></a>
          </li>
          </ul>
      </div>
    </nav>
  )
}
