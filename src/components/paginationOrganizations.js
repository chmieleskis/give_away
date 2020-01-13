import React, {Component} from "react";

class PaginationOrganizations extends Component {
    state = {
        organizationsNames: [
            'Organizacja "Lorem Ipsum 1"',
            'Organizacja "Lorem Ipsum 2"',
            'Organizacja "Lorem Ipsum 3"',
            'Organizacja "Lorem Ipsum 4"',
            'Organizacja "Lorem Ipsum 5"',
            'Organizacja "Lorem Ipsum 6"',
        ],
        currentPage: 1,
        namesPerPage: 3
    };

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        })
    };

    render() {
        const {organizationsNames, currentPage, namesPerPage} = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;

        const currentNames = organizationsNames.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((organizationName, i) => {
            return <li key={i} className='organisationDescription'>
                <div>
                    <p className="organisationName">{organizationName}</p>
                    <p className="organisationMission">Cel i misja:</p>
                </div>
                <div>
                    <p className="organisationNeeds">Lorem ipsum dolor sit amet.</p>
                </div>
            </li>
        });

        const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(organizationsNames.length/namesPerPage); i++)
        {
            const element = <li key={i} onClick={e=>this.handleClick(e, i)} className={this.state.currentPage == i ? 'active' : ''}>{i}</li>;
            pageNumbers.push(element)
        }
        if (this.state.organizationsNames.length/this.state.namesPerPage > 1) {
            return (
                <>
                    <p className="descriptionPagination">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
                    <ul className='names'>
                        {elements}
                    </ul>
                    <ul className='pageNumber'>
                        {pageNumbers}
                    </ul>
                </>
            )
        } else {
            return (
                <>
                    <p className="descriptionPagination">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
                    <ul className='names'>
                        {elements}
                    </ul>
                </>
            )
        }
    }
}

export default PaginationOrganizations;