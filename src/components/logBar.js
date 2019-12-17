import React, {Component} from "react";
import {Link} from "react-router-dom";

class LogBar extends Component {
    render() {
        return (
            <ul className="logBar">
                <li><Link className="logBarButton" to='/logowanie'>Zaloguj</Link></li>
                <li><Link className="logBarButton" to='/rejestracja'>Załóż konto</Link></li>
            </ul>
        )
    }
}

export default LogBar;