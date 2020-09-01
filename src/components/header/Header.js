import React from "react";

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="navContainer">
            <a className="logo" href="logo.com">
              <img src="" alt="" />
            </a>
            <ul>
              <li className="navElement"><a className="navLink" href="google.com"><span>Home</span></a></li>
              <li className="navElement"><a className="navLink" href="google.com"><span>About</span></a></li>
              <li className="navElement"><a className="navLink" href="google.com"><span>Work</span></a></li>
              <li className="navElement"><a className="navLink" href="google.com"><span>Contact</span></a></li>
            </ul>
            <div className="hamburguer"></div>
          </div>
        </nav>
        <div className="headerContainer">
          <div className="headerContainerLeft">
            <p>Hola, soy Fabricio Borgobello.</p>
            <button className="CTA">Contact Me</button>
          </div>
          <div className="headerContainerRight">
            <img className="headerFoto" src="" alt="headerFoto" />
          </div>
        </div>
      </header>
    </div>
  );
};
