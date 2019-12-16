import React, {Component} from "react";
import {Link} from "react-router-dom"

class HomeFourSteps extends Component {
    render() {
        return (
            <>
                <div className="container fourSteps" id='fourSteps'>
                    <h3>Wystarczą 4 proste kroki</h3>
                    <span className="decoration"></span>
                </div>
                <div className="container fourColumns">
                    <div className="column">
                        <span className="icon iconOne"></span>
                        <h6>Wybierz rzeczy</h6>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="column">
                        <span className="icon iconTwo"></span>
                        <h6>Spakuj je</h6>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="column">
                        <span className="icon iconThree"></span>
                        <h6>Zdecyduj komu chcesz pomóc</h6>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="column">
                        <span className="icon iconFour"></span>
                        <h6>Zamów kuriera</h6>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="container buttonContainer">
                    <Link to='/logowanie' className="buttonGiveAway">Oddaj<br/>rzeczy</Link>
                </div>
            </>
        )
    }

}

export default HomeFourSteps;