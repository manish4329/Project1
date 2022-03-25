import React from 'react'
import { Navbar } from './Navbar';

export const Home = () => {
  return (
    <>
    <div id='home' className="home">
    <Navbar/>
    <div id='homebox' className='text-start'>
    <h5> YOUR PERSONAL TRAVEL MEMOIR</h5>
    <div className='body_line'></div>
    <h1><b>PACK YOUR BAGS !!</b></h1>
    <h2>WE WILL BE<br/>
        GOING PLACES <br/>
        SOON !!</h2>
      <input id='apple' type="image" src="/images/Applelogo.svg" alt="AppleLogo.svg" width="180" height="48"/> 
      <input id='google' type="image" src="/images/Googlelogo.svg" alt="GoogleLogo.svg" width="180" height="48"/>
    </div>
    </div>
    </>
  )
}