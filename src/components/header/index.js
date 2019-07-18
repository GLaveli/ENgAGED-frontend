import React from "react";
import "./sideNav.css";


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

    return (

      <React.Fragment>
        <header id="main-header">
          <div onClick={this.openNavClick} className="open-nav">
            <spam className="menu-txt">&#9776; </spam>
          </div>
          <div className="nav-login">
            <p id="login-txt">Login</p>
          </div>
          <div className="nav-img-login">
            <img id="img-banner" alt="xD" src="https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/c5f517b1-f22a-4399-b276-f9746d83d262.jpg" />
          </div>
        </header>
        <div onClick={this.navCoverClick} className="nav-cover" style={navCoverStyle} />
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <spam onClick={this.closeNavClick} className="close-nav">
            &lang;
          </spam>
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