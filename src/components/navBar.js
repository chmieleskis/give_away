import React, {Component} from "react";
import {HashLink} from 'react-router-hash-link';

class NavBar  extends Component{
    render() {
        return (
        <ul className="navBar">
            <li><HashLink className="navBarButton" to='/#headerContainer' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Start</HashLink></li>
            <li><HashLink className="navBarButton" to='/#fourSteps' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>O co chodzi?</HashLink></li>
            <li><HashLink className="navBarButton" to='/#aboutUs' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>O nas</HashLink></li>
            <li><HashLink className="navBarButton" to='/#organizations' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Fundacje i organizacje</HashLink></li>
            <li><HashLink className="navBarButton" to='/#contact' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Kontakt</HashLink></li>
        </ul>
        )
    }
}

export default NavBar;