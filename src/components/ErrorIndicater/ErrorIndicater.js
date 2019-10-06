import React from 'react'
import "./ErrorIndicater.css";
import star from './death-star.png'

const ErrorIndicater = () => {
    return (
      <div className="error-indicator">
        <img src={star} alt="star" />
        <span className="boom">Boom</span>
        <span>something has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
    );
}


export default ErrorIndicater;