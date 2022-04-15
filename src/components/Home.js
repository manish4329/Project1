import React from "react";

export const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <div id="homebox" className="container">
          <h5> YOUR PERSONAL TRAVEL MEMOIR</h5>
          <div id="homeline" className="body_line"></div>
          <h1>
            <strong>PACK YOUR BAGS !!</strong>
          </h1>
          <h2>
            WE WILL BE<br/>
            GOING PLACES<br/>
            SOON !!
          </h2>
          <a className="body_button" href="https://forrms.google">
            Get On The Early Access List
          </a>
          <br />
          <input
            id="apple"
            type="image"
            src="/images/Applelogo.svg"
            alt="AppleLogo.svg"
            width="180"
            height="48"
          />
          <input
            id="google"
            type="image"
            src="/images/Googlelogo.svg"
            alt="GoogleLogo.svg"
            width="180"
            height="48"
          />
        </div>
      </div>
    </>
  );
};
