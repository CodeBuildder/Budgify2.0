import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => (
    <div className="boxLayout">
        <div className="boxLayout-box">
        <h1>Budgify App</h1>
        <p>Time to get our expenses under control. Use Budgify!</p>
        <h2>Sign Up with</h2>
            <button onClick={startLogin}>Login</button>
        </div>   
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)