import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="contentContainer">
    <div className="navContent">
        <i id="logo" class="fas fa-shopping-cart"></i>
        <Link className="headerTitle" to="/dashboard">
          <h1>Budgify</h1>
        </Link>
        <button id="logoutButton" className="fas fa-sign-out-alt" onClick = {startLogout} ></button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
