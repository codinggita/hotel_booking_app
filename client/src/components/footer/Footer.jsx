import React from 'react';
import './footer.scss';
import Logo from '../../asset/logo-revert.svg';


function Footer() {
  return (
    <footer>
      <div className='icons'>
        <div className='logo'><img src={Logo} alt='tripo'height={24}/></div>
        <div className='social'>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full h-full w-full">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 5.62h-1.52a.65.65 0 00-.61.54v1.56H15c-.09 1.19-.26 2.28-.26 2.28h-1.88v6.75h-2.8V12H8.7V9.72h1.36V7.86c0-.33-.07-2.61 2.87-2.61H15z" fill="currentColor">
                </path>
              </svg>
            </li>
            <li>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none max-h-full max-w-full h-full w-full">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.101c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10zm15.29-5.5h-1.84l-3.033 3.514-2.62-3.514H6l4.534 6.016-4.3 4.984h1.844l3.317-3.845 2.902 3.845H18l-4.73-6.34 4.02-4.66zm-1.467 9.884h-1.02L8.146 7.66h1.095l6.582 8.826z" fill="currentColor">
                </path>
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full h-full w-full">
                <g fill="currentColor">
                  <circle cx="12" cy="12" r="2.25"></circle>
                  <path d="M17.49 9.27A3.85 3.85 0 0017.26 8a2 2 0 00-.51-.77 2 2 0 00-.75-.49 3.85 3.85 0 00-1.25-.23H9.29A3.85 3.85 0 008 6.74a2 2 0 00-.77.51 2 2 0 00-.49.75 3.85 3.85 0 00-.23 1.25v5.46A3.85 3.85 0 006.74 16a2 2 0 00.51.77 2 2 0 00.77.51 3.85 3.85 0 001.25.23h5.46a3.85 3.85 0 001.27-.25A2.32 2.32 0 0017.26 16a3.85 3.85 0 00.23-1.25v-2.73c0-1.8.03-2.02 0-2.75zM12 15.46A3.46 3.46 0 1115.46 12 3.46 3.46 0 0112 15.46zm3.6-6.25a.81.81 0 11.81-.81.81.81 0 01-.81.81z">
                  </path>
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.7 12.78a4.82 4.82 0 01-.31 1.64 3.49 3.49 0 01-2 2 4.82 4.82 0 01-1.64.31c-.72 0-.95.05-2.78.05s-2.06 0-2.78-.05a4.82 4.82 0 01-1.64-.31 3.19 3.19 0 01-1.19-.78 3.19 3.19 0 01-.78-1.19 4.82 4.82 0 01-.31-1.64v-2.78-2.78a4.82 4.82 0 01.31-1.64 3.19 3.19 0 01.78-1.19 3.19 3.19 0 011.19-.78 5 5 0 011.64-.32h5.56a5 5 0 011.64.32 3.19 3.19 0 011.19.78 3.19 3.19 0 01.78 1.19 4.82 4.82 0 01.31 1.64c0 .72.05.95.05 2.78s.02 2.03-.02 2.75z"></path>
                </g>
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full h-full w-full">
                <g fill="currentColor">
                  <path d="M10 9l5 3-5 3V9z"></path>
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm7 12.59A2.36 2.36 0 0116.59 17H7.41A2.36 2.36 0 015 14.59V9.41A2.36 2.36 0 017.41 7h9.18A2.36 2.36 0 0119 9.41z"></path>
                </g>
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full h-full w-full">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zM8.73 17.4H6.15V9.71h2.58zM7.44 8.66A1.33 1.33 0 117.46 6a1.33 1.33 0 110 2.66zM18 17.4h-2.57v-4.12c0-1-.37-1.74-1.31-1.74a1.39 1.39 0 00-1.31.94 1.66 1.66 0 00-.09.62v4.3h-2.57V9.71h2.57v1.09A2.54 2.54 0 0115 9.53c1.69 0 3 1.09 3 3.46z" fill="currentColor">
                </path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className='country'>
        country-select
      </div>
      <div className='list'>
        <div className='company'>
          <ul>
            <li>Company</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Investor Relation</li>
            <li>Mobile apps - searching on the go</li>
            <li>trivago Business Studio</li>
          </ul>
        </div>
        <div className='help'>
          <ul>
            <li>Help</li>
            <li>Learn how trivago works</li>
            <li>Terms and conditions</li>
            <li>Legal nformation</li>
            <li>Do Not Sell My Personal Information</li>
            <li>Privacy note</li>
            <li>Cyber Security</li>
          </ul>
        </div>
        <div className='contact'>
          <div className='mail'>
            <h2>Get exclusive inspiration for your next stay – subscribe to our newsletter.</h2>
            <div className='input'>
              <input type='email' placeholder='Email address'/>
              <button>Subscribe</button>
            </div>
          </div>
          <div className='copyright'>
            <p>trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Germany</p>
            <p>Copyright 2024 trivago | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer