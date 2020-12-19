import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    
    <Link to="/dashboard">
    <i class="fas fa-shopping-cart"></i>
      <h1>Expensify</h1>
    </Link>
    <button onClick = {startLogout} >LogOut</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
