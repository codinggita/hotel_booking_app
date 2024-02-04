import Logo from '../../assets/logo.svg';
import './navbar.scss';

function Navbar() {
  return (
    <header>
      <div className='logo'>
          <img src={Logo} alt='logo' height={45}/>
      </div>
      <div className='navigation'>
          <ul>
               <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                         <path d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z" fill="currentColor"></path>
                    </svg>
                    <span>Favourites</span>
                    
               </li>
               <li className='currency'>
               <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M12 21.5V21v.5c-5.238 0-9.5-4.262-9.5-9.5H3h-.5c0-5.238 4.262-9.5 9.5-9.5V3v-.5c5.238 0 9.5 4.262 9.5 9.5H21h.5c0 5.238-4.262 9.5-9.5 9.5zm-6.389-3.898a8.5 8.5 0 005.09 2.798 15.327 15.327 0 01-2.592-3.943c-1.05.345-1.896.78-2.498 1.145zm10.25-1.078A15.355 15.355 0 0113.3 20.4a8.49 8.49 0 005.061-2.77 15.22 15.22 0 00-2.5-1.107zm-3.361-.655v3.926a14.328 14.328 0 002.394-3.557 12.39 12.39 0 00-2.394-.369zm-3.421.312a14.329 14.329 0 002.421 3.614v-3.938c-.876.026-1.687.148-2.421.324zm7.165-.586c.884.303 1.8.71 2.743 1.241a8.451 8.451 0 001.498-4.336h-3.542a11.783 11.783 0 01-.699 3.095zM3.514 12.5a8.454 8.454 0 001.48 4.308c.645-.4 1.576-.89 2.738-1.28a11.717 11.717 0 01-.676-3.028H3.515zm8.986 2.362c.88.044 1.813.181 2.788.442a10.8 10.8 0 00.652-2.804H12.5v2.362zM8.06 12.5c.086.952.31 1.873.63 2.745a12.903 12.903 0 012.81-.393V12.5H8.06zm8.918-1h3.507a8.443 8.443 0 00-1.484-4.315 13.87 13.87 0 01-2.55 1.207c.337 1.004.514 2.04.527 3.106v.002zm-4.478 0h3.478a9.088 9.088 0 00-.485-2.81c-.9.245-1.904.416-2.993.449V11.5zm-4.479 0H11.5V9.13a13.308 13.308 0 01-2.977-.487 9.094 9.094 0 00-.502 2.857zm-4.506 0H7.02v-.003c.015-1.084.197-2.138.547-3.158a16.469 16.469 0 01-2.555-1.175A8.444 8.444 0 003.515 11.5zM12.5 4.14v4.025c.946-.03 1.825-.173 2.63-.387-.581-1.27-1.459-2.485-2.63-3.638zM8.897 7.72c.909.25 1.778.387 2.603.432V4.14C10.347 5.275 9.48 6.47 8.897 7.72zm4.49-4.107c1.204 1.221 2.107 2.512 2.708 3.865.878-.313 1.645-.7 2.288-1.085a8.498 8.498 0 00-4.995-2.78zM5.64 6.368c.787.436 1.553.78 2.295 1.046.6-1.33 1.494-2.599 2.678-3.8A8.497 8.497 0 005.64 6.367z"></path></svg>
                    <span>En-Rs</span>
               </li>
               <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none max-h-full max-w-full"><path fill="transparent" d="M0 0h24v24H0z"></path><path d="M17.129 19.038a5.363 5.363 0 00-1.895-2.87A5.274 5.274 0 0012 15.058c-1.17 0-2.307.39-3.234 1.11a5.362 5.362 0 00-1.895 2.87" stroke="#0A1121" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path><path d="M21 12C21 0 3 0 3 12s18 12 18 0z" stroke="#0A1121" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path><path d="M11.998 12.811c1.939 0 3.03-1.1 3.03-3.058 0-1.957-1.091-3.059-3.03-3.059-1.938 0-3.028 1.102-3.028 3.06 0 1.957 1.09 3.057 3.028 3.057z" stroke="#0A1121" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path></svg>
                    <span>Log In</span>
               </li>
               <li className='dropdown'>
                    <span className='dropbtn'>
                         <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none max-h-full max-w-full"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-linecap="round"></path></svg>
                         <span>Menu</span>
                    </span>
                    {/* <ul className='drop-items'>
                         <li>Recently-viewed</li>
                         <li>Help and support</li>
                    </ul> */}
                    
               </li>
          </ul>
      </div>
    </header>
  )
}

export default Navbar

