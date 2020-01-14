import React, {Component} from "react";

class PaginationCollections extends Component {
    state = {
        collectionsNames: [
            {
                name: 'Zbiórka "Alternatywy 4"',
                mission: 'Idź do tej kuchty od profesora i powiedz jej, że ja w tych warunkach nie mogę pracować.',
                needs: 'niech konik polny, niech wiat swawolny...'
            },            {
                name: 'Zbiórka "Co mi zrobisz, jak mnie złapiesz?"',
                mission: 'Podejrzenia panów są całkowicie bezpodstawne.',
                needs: 'kurdupel?, kurdupel?'
            },            {
                name: 'Zbiórka "Brunet wieczorową porą"',
                mission: 'Kolega tak nieszczęśliwie schodził po schodach, że wbił sobie nóż w plecy.',
                needs: 'Należy się 50 złotych.'
            },
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
                    <p className="organisationName" key={i}>{collectionName.name}</p>
                    <p className="organisationMission" key={i}>Cel i misja: {collectionName.mission}</p>
                </div>
                <div>
                    <p className="organisationNeeds">{collectionName.needs}</p>
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
                    <p className="descriptionPagination">Ja rozumiem, że wam jest zimno, ale jak jest zima to musi być zimno! Tak? Pani kierowniczko, takie jest odwieczne prawo natury! </p>
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
                    <p className="descriptionPagination">Ja rozumiem, że wam jest zimno, ale jak jest zima to musi być zimno! Tak? Pani kierowniczko, takie jest odwieczne prawo natury! </p>
                    <ul className='names'>
                        {elements}
                    </ul>
                </>
            )
        }
    }
}

export default PaginationCollections;