import React, {Component} from "react";
import {Link} from "react-router-dom";
import LogBar from "./logBar";
import NavBar from "./navBar";

class HomeHeader extends Component {
    render() {
        return (
            <div className="container headerContainer">
                <LogBar/>
                <NavBar/>
                <div className="textBar">
                    <h3>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h3>
                    <span className="decoration"/>
                    <div className="buttonBar">
                         <Link to='/logowanie' className=" button buttonGiveAway">Oddaj<br/>rzeczy</Link>
                         <Link to='/logowanie' className="button buttonCollection">Zorganizuj<br/>zbiórkę</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;