import React, {Component} from "react";

class HomeThreeColumns extends Component {
    render() {
        return (
            <div className="container threeColumnsContainer">
                <div className="column">
                    <p className="counter">0</p>
                    <p className="title">WSPARTYCH ORGANIZACJI</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at, ducimus facilis illum iure maxime tempora. Doloremque earum id minus!</p>
                </div>
                <div className="column">
                    <p className="counter">0</p>
                    <p className="title">WSPARTYCH ORGANIZACJI</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est exercitationem fuga harum minus non pariatur praesentium, quas quidem rerum!</p>
                </div>
                <div className="column">
                    <p className="counter">0</p>
                    <p className="title">ZORGANIZOWANYCH ZBIÓREK</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolore, et fugit natus nihil nulla quo sunt suscipit tenetur ullam.</p>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns;