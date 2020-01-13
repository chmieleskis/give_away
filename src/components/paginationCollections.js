import React, {Component} from "react";

class PaginationCollections extends Component {
    state = {
        collectionsNames: [
            'Zbiórka "Lorem Ipsum 1"',
            'Zbiórka "Lorem Ipsum 2"',
            'Zbiórka "Lorem Ipsum 3"',
        ],
        collectionsMissions: [
            'Misja 1',
            'Misja 2',
            'Misja 3'
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
        const {collectionsNames, collectionsMissions, currentPage, namesPerPage} = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;

        const currentNames = collectionsNames.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((collectionName, collectionMission, i) => {
            return <li className='organisationDescription'>
                <div>
                    <p className="organisationName" key={i}>{collectionName}</p>
                    <p className="organisationMission" key={i}>Cel i misja: {collectionMission}</p>
                </div>
                <div>
                    <p className="organisationNeeds">Lorem ipsum dolor sit amet.</p>
                </div>
            </li>
        });

        const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(collectionsNames.length/namesPerPage); i++)
        {
            const element = <li key={i} onClick={e=>this.handleClick(e, i)} className={this.state.currentPage == i ? 'active' : ''}>{i}</li>;
            pageNumbers.push(element)
        }
        if (this.state.collectionsNames.length/this.state.namesPerPage > 1) {
            return (
                <>
                    <p className="descriptionPagination">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
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
                    <p className="descriptionPagination">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <ul className='names'>
                        {elements}
                    </ul>
                </>
            )
        }
    }
}

export default PaginationCollections;