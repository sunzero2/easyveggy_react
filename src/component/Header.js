import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Start Your Happy</div>
          <div className="masthead-heading text-uppercase">EASY VEGGY</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">LET's START</a>
        </div>
      </header>
    )
  }
}

export default Header;