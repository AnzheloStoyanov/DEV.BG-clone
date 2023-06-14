import React from 'react';
import Logo from "./cropped-dev.bg-logo.png"
import './header.css'


const Header = () => {
  return (
      <nav>
          <div className='dev-navbar-left'>
              <a className="dev-logo" href="/">
                  <img src={Logo} alt="Logo" />
              </a>
          </div>

          <div className="dev-navbar">
              <a className="nav-link" href="/page1"> ОБЯВИ</a>
              <a className="nav-link" href="/page2">КОМПАНИИ</a>
              <a className="nav-link" href="/page3">СЪБИТИЯ</a>
              <a className="nav-link" href="/page4">DIGEST</a>
              <a className="nav-link" href="/page5">ПОДКАСТ</a>
              <a className="nav-link" href="/page6">ЗА DEV.BG</a>
          </div>

          <div className='dev-navbar-right'>
              <a className='Bahur'>EN</a>
              <a className='dev-login-btn'>Вход</a>
              <a className='dev-signup-btn'>Създай профил</a>
          </div>


      </nav>

  );
};



 export default Header;

// import React from 'react';

// const Header = () => {
//   return (
//     <header className="navbar navbar-light bg-white">
//       <a className="navbar-brand" href="/">
//         <img src="/path/to/logo.png" alt="Logo" />
//       </a>
//       <div className="navbar-nav">
//         <a className="nav-link" href="/page1">Page 1</a>
//         <a className="nav-link" href="/page2">Page 2</a>
//         <a className="nav-link" href="/page3">Page 3</a>
//         <a className="nav-link" href="/page4">Page 4</a>
//         <a className="nav-link" href="/page5">Page 5</a>
//         <a className="nav-link" href="/page6">Page 6</a>
//       </div>
//       <div className="navbar-nav ml-auto">
//         <button className="btn btn-link">Bulgarian</button>
//         <button className="btn btn-primary">Login</button>
//         <button className="btn btn-success">Sign Up</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
