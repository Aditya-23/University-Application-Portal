import React from 'react';

export default function Footer() {
  return (
    <>
        <footer className='container-footer'>
          <div className='footer-main'>
            <h4> University Name </h4>
          <div className='myDivElement'>
          <ul>
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About Us</a></li>
               <li><a href="#clients">Our Clients</a></li>  
               <li><a href="#contact">Contact Us</a></li>
          </ul>
          </div>
          <div className='copyright'>
              <p>©2022 University | 390 Huntington Avenue, Boston, MA </p>
          </div>
          </div>
        </footer>
    </>
  );
}
