import React from 'react';
import './sideNav.css';

class Header extends React.Component {

  state = {
    state: {
      showNav: false
    }
  };

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  };

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  };

  openNav = () => {
    this.setState({
      showNav: true
    });

    document.addEventListener("keydown", this.handleEscKey)
  };
  closeNav = () => {
    this.setState({
      showNav: false
    });

    document.removeEventListener("keydown", this.handleEscKey)
  };

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    };
  };

  render() {

    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "250px" : "0" };

    require('./menuConfig')


    return (

      <React.Fragment>
        <header id="main-header">
          <div className="open-nav" onClick={this.openNavClick}>
            <div className="menu-txt">&#9776; </div>
          </div>





          <div className="nav-login">
            <div className="more">
              <button id="more-btn" className="more-btn">
                <div className="more-dot"></div>
                <div className="more-dot"></div>
                <div className="more-dot"></div>
              </button>
              <div className="more-menu">
                <div className="more-menu-caret">
                  <div className="more-menu-caret-outer"></div>
                  <div className="more-menu-caret-inner"></div>
                </div>
                <ul className="more-menu-items" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                  <li className="more-menu-item" role="presentation">
                    <button type="button" className="more-menu-btn" role="menuitem">Share</button>
                  </li>
                  <li className="more-menu-item" role="presentation">
                    <button type="button" className="more-menu-btn" role="menuitem">Copy</button>
                  </li>
                  <li className="more-menu-item" role="presentation">
                    <button type="button" className="more-menu-btn" role="menuitem">Embed</button>
                  </li>
                  <li className="more-menu-item" role="presentation">
                    <button type="button" className="more-menu-btn" role="menuitem">Block</button>
                  </li>
                  <li className="more-menu-item" role="presentation">
                    <button type="button" className="more-menu-btn" role="menuitem">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>








          {/*
            <div className="nav-login">
              <p id="login-txt">Login</p>
            </div>
          */}





          <div className="nav-img-login">
            <img id="img-banner" alt="xD" src="https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/c5f517b1-f22a-4399-b276-f9746d83d262.jpg" />
          </div>
        </header>
        <div className="nav-cover" onClick={this.navCoverClick} style={navCoverStyle} />
        <div className="side-nav" name="side-nav" style={sideNavStyle}>
          <div className="close-nav" onClick={this.closeNavClick} >
            &lang;
          </div>
          <p >Menu</p>
          <a href=" ">Home</a>
          <a href=" ">Item</a>
          <a href=" ">Item</a>
          <a href=" ">Item</a>
        </div>
      </React.Fragment>
    );
  };
};

export default Header;