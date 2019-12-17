import React, {Component} from "react";
import LogBar from "./logBar";
import NavBar from "./navBar";
import {Link} from "react-router-dom";

class LogIn extends Component {
    render() {
        return (
            <div className="logInContainer">
                <LogBar/>
                <NavBar/>
                <div className="logInBar">
                    <h2>Zaloguj się</h2>
                    <span className="decoration"></span>
                    <div className="logInInputs">
                        <label className="label">Email</label>
                        <input className='input' type="email"/>
                        <label className="label">Hasło</label>
                        <input className='input' type="password"/>
                    </div>
                    <div className="logInButtons">
                        <Link className="button" to='/rejestracja'>Załóż konto</Link>
                        <button className="button" to='#'>Zaloguj się</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;