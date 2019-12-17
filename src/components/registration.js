import React, {Component} from "react";
import LogBar from "./logBar";
import NavBar from "./navBar";
import {Link} from "react-router-dom";

class Registration extends Component {
    render() {
        return (
            <div className="registrationContainer">
                <LogBar/>
                <NavBar/>
                <div className="logInBar">
                    <h2>Załóż konto</h2>
                    <span className="decoration"></span>
                    <div className="logInInputs">
                        <label className="label">Email</label>
                        <input className='input' type="email"/>
                        <label className="label">Hasło</label>
                        <input className='input' type="password"/>
                        <label className="label">Powtórz hasło</label>
                        <input className='input' type="password"/>
                    </div>
                    <div className="logInButtons">
                        <button className="button">Załóż konto</button>
                        <Link className="button" to='/logowanie'>Zaloguj się</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;