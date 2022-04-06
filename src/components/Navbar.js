import React,{useState} from "react";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const white = "/images/Logo1.svg";
const yellow = "/images/Logo2.svg";
const image = { white, yellow };
const [mySrc, setmySrc] = useState(image.white);
const [border1, setborder1] = useState(null);
const [border2, setborder2] = useState(null);
const [border3, setborder3] = useState(null);
const [mystyle, setmystyle] = useState({ color: "white" });
 
 const location= useLocation();
 console.log(location.pathname);
 const onclick = ()=>{
  if (location.pathname === "/About"){
    setmystyle({
      color: "rgb(247, 207, 1)",
    });
    setmySrc(image.yellow);
    setborder1({
      borderBottom: "5px solid rgb(247, 207, 1)",
    });
  }
  if (location.pathname === "/Privacy") {
    setmystyle({
      color: "rgb(247, 207, 1)",
    });
    setmySrc(image.yellow);
    setborder2({
      borderBottom: "5px solid rgb(247, 207, 1)",
    });
  }
  if ( location.pathname === "/Terms") {
    setmystyle({
      color: "rgb(247, 207, 1)",
    });
    setmySrc(image.yellow);
    setborder3({
      borderBottom: "5px solid rgb(247, 207, 1)",
    });
  }
 }
  
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div id="navbar" className="navbar">
          <img src={mySrc} className="img-thumbnails" alt="Logo1.svg" />
          <a id="anchor" className="navbar-brand" href="/">
            <h2 style={mystyle}>BEEN</h2>
            <h3 style={mystyle}>THERE</h3>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul id="ulmenu" className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={onclick}
                style={border1}
                aria-current="page"
                href="/About"
              >
                <b>About Us</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={onclick}
                style={border2}
                aria-current="page"
                href="/Privacy"
              >
                <b>Privacy Policy</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={onclick}
                style={border3}
                aria-current="page"
                href="/Terms"
              >
                <b>Terms of Use</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

    