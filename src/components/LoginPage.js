import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
//import Footer from './Footer'

export const LoginPage = ({startLogin}) => (
    <div className="boxLayout">
        <div className="boxLayout-box">
        <h1 className="boxLayout-title">Budgify App</h1>
        <p>Time to get our expenses under control. Use Budgify!</p>
            <button id="loginButton" class="fab fa-google" onClick={startLogin}>        Sign in</button>
        </div>
        <footer>
            <div class="inner-width">
                <div class="copyright">
                    &copy; 2020 | Created and Developed By <a href="http://skaushik-kums.000webhostapp.com/">CodeBuilder</a>
                </div>
                <div class="sm">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="https://twitter.com/KashKS20" class="fab fa-twitter"></a>
                        <a href="https://linkedin.com/in/kaushik-kumaran-499bba68" class="fab fa-linkedin-in"></a>
                        <a href="https://github.com/Codebuilder2022" class="fab fa-github"></a>
                </div>
            </div>
        </footer>
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)