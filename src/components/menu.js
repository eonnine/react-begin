import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink><br/>
        <NavLink to="/board" className="item" activeClassName="active">Board</NavLink><br/>
        <NavLink to="/login" className="item" activeClassName="active">Login</NavLink><br/>
      </div>
    )
  }
}

export default Menu;