import React, {Component} from "react";
import LogBar from "./logBar";
import NavBar from "./navBar";
import {Link} from "react-router-dom";

class LogOut extends Component {
    render() {
        return (
            <div className="logOutContainer">
                <LogBar/>
                <NavBar/>
                <div className="logInBar">
                    <h2>Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                    <span className="decoration"></span>
                    <Link className="button" to='/'>Strona główna</Link>
                </div>
            </div>
        )
    }
}

export default LogOut;