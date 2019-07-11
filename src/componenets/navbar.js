import React, { Component } from "react";
class Navbar extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <div><h4>Company name</h4></div>

          <ul className="navlinks">
            <div>
            <li>
              <a href="s" className='navlink'>home</a>
            </li>
            </div>
            <div>
            <li>
              <a href="s" className='navlink'>about</a>
            </li>
            </div>
            <div>
            <li>
              <a href="s" className='navlink'>policy</a>
            </li>
            </div>
           
            
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
