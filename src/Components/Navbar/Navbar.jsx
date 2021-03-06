import React from "react";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase";
import AuthUserContext from "../../AuthUserContext";

const Navbar = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavAuth /> : <NavNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavAuth = ({ authUser }) => (
  <div className="ui purple pointing menu">
    <NavLink exact to="/" className="item">
      Home
    </NavLink>
    <NavLink exact to="/guitarists" className="item">
      Guitarists
    </NavLink>
    <NavLink to="/add" className="item">
      Add a Guitarist
    </NavLink>
    <div className="right menu">
      <div class="ui simple dropdown item">
        My Acount
        <i class="dropdown icon" />
        <div class="menu">
          <Link to="/account" className="item">
            Account Info
          </Link>
          <Link to="/" onClick={auth.doSignOut} className="item">
            Log out
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="ui transparent icon input">
          <input type="text" placeholder="Search..." />
          <i className="search link icon" />
        </div>
      </div>

      {/* <Link to="/" onClick={auth.doSignOut} className="item">
        Log out
      </Link>
      <div className="item">
        <div className="ui transparent icon input">
          <input type="text" placeholder="Search..." />
          <i className="search link icon" />
        </div>
      </div> */}
    </div>
  </div>
);

const NavNonAuth = ({ authUser }) => (
  <div className="ui purple pointing menu">
    <NavLink exact to="/" className="item">
      Home
    </NavLink>
    <NavLink exact to="/guitarists" className="item">
      Guitarists
    </NavLink>
    {/* <NavLink to="/add" className="item">Add a Guitarist</NavLink> */}
    <div className="right menu">
      <Link to="/signin" className="item">
        Log in
      </Link>
      <div className="item">
        <div className="ui transparent icon input">
          <input type="text" placeholder="Search..." />
          <i className="search link icon" />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
