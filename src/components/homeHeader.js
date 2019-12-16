import React, {Component} from "react";
import {Link} from "react-router-dom"
import {HashLink} from 'react-router-hash-link';

class HomeHeader extends Component {
    render() {
        return (
            <div className="container headerContainer">
                <div className="headerText">
                    <ul className="logBar">
                        <li><Link className="logBarButton" to='/logowanie'>Zaloguj</Link></li>
                        <li><Link className="logBarButton" to='/rejestracja'>Załóż konto</Link></li>
                    </ul>
                    <ul className="navBar">
                        <li><HashLink className="navBarButton" to='#' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Start</HashLink></li>
                        <li><HashLink className="navBarButton" to='#fourSteps' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>O co chodzi?</HashLink></li>
                        <li><HashLink className="navBarButton" to='#aboutUs' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>O nas</HashLink></li>
                        <li><HashLink className="navBarButton" to='#organizations' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Fundacje i organizacje</HashLink></li>
                        <li><HashLink className="navBarButton" to='#contact' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Kontakt</HashLink></li>
                    </ul>
                    <div className="textBar">
                        <h3>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h3>
                        <span className="decoration"></span>
                        <div className="buttonBar">
                            <Link to='/logowanie' className=" button buttonGiveAway">Oddaj<br/>rzeczy</Link>
                            <Link to='/logowanie' className="button buttonCollection">Zorganizuj<br/>zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;