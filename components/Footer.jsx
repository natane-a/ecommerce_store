import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Natane Earrings All rights reserved</p>
      <p className="icons">
        <div className='icon'>
          <AiFillInstagram/>
        </div>
        <div className="icon">
          <AiOutlineTwitter/>
        </div>
      </p>
    </div>
  )
}

export default Footer