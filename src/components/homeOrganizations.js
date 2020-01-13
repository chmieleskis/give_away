import React, {Component} from "react";
import PaginationFundations from "./paginationFundations";
import PaginationOrganizations from "./paginationOrganizations";
import PaginationCollections from "./paginationCollections";

class Organizations extends Component {
    state = {
        list: "fundations",
    };

    handleFoundations = () => {
        this.setState({
            list: "fundations"
        })
    };

    handleOrganizations = () => {
        this.setState({
            list: "organizations"
        })
    };

    handleCollections = () => {
        this.setState({
            list: "collections"
        })
    };

    render() {
        if (this.state.list === "fundations") {
            return (
                <div className="organizations" id='organizations'>
                    <h3>Komu pomagamy?</h3>
                    <span className="decoration"/>
                    <ul className='organizationsLists'>
                        <li onClick={this.handleFoundations}><p className='button'>Fundacjom</p></li>
                        <li onClick={this.handleOrganizations}><p className='button'>Organizacjom<br/>pozarządowym</p></li>
                        <li onClick={this.handleCollections}><p className='button'>Zbiórkom<br/>lokalnym</p></li>
                    </ul>
                    <PaginationFundations/>
                </div>
            )
        } else if (this.state.list === "organizations") {
            return (
                <div className="organizations" id='organizations'>
                    <h3>Komu pomagamy?</h3>
                    <span className="decoration"/>
                    <ul className='organizationsLists'>
                        <li onClick={this.handleFoundations}><p className='button'>Fundacjom</p></li>
                        <li onClick={this.handleOrganizations}><p className='button'>Organizacjom<br/>pozarządowym</p></li>
                        <li onClick={this.handleCollections}><p className='button'>Zbiórkom<br/>lokalnym</p></li>
                    </ul>
                    <PaginationOrganizations/>
                </div>
            )
        } else {
            return (
                <div className="organizations" id='organizations'>
                    <h3>Komu pomagamy?</h3>
                    <span className="decoration"/>
                    <ul className='organizationsLists'>
                        <li onClick={this.handleFoundations}><p className='button'>Fundacjom</p></li>
                        <li onClick={this.handleOrganizations}><p className='button'>Organizacjom<br/>pozarządowym</p></li>
                        <li onClick={this.handleCollections}><p className='button'>Zbiórkom<br/>lokalnym</p></li>
                    </ul>
                    <PaginationCollections/>
                </div>
            )
        }

    }
}

export default Organizations;