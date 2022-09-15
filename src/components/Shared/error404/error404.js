import React from 'react';
import error404 from './error404.png' ;
import './error404.css';

const Error404Page = () => {
    return <div>
      <h1>This page does not exist</h1>
      <center >
      <img className='error404-img' src={error404} alt='page does not exist' />
      </center>
      </div>
  }
  
  
  export default Error404Page;