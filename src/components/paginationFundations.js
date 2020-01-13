import React, {Component} from "react";

class PaginationFundations extends Component {
    state = {
        fundationsNames: [
            'Fundacja "Lorem Ipsum 1"',
            'Fundacja "Lorem Ipsum 2"',
            'Fundacja "Lorem Ipsum 3"',
            'Fundacja "Lorem Ipsum 4"',
            'Fundacja "Lorem Ipsum 5"',
            'Fundacja "Lorem Ipsum 6"',
            'Fundacja "Lorem Ipsum 7"',
            'Fundacja "Lorem Ipsum 8"',
            'Fundacja "Lorem Ipsum 9"',
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
        const {fundationsNames, currentPage, namesPerPage} = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;

        const currentNames = fundationsNames.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((fundationName, i) => {
            return <li key={i} className='organisationDescription'>
                <div>
                    <p className="organisationName">{fundationName}</p>
                    <p className="organisationMission">Cel i misja: </p>
                </div>
                <div>
                    <p className="organisationNeeds">Lorem ipsum dolor sit amet.</p>
                </div>
            </li>
        });

        const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(fundationsNames.length/namesPerPage); i++)
        {
            const element = <li key={i} onClick={e=>this.handleClick(e, i)} className={this.state.currentPage == i ? 'active' : ''}>{i}</li>;
            pageNumbers.push(element)
        }
        if (this.state.fundationsNames.length/this.state.namesPerPage > 1) {
            return (
                <>
                    <p className="descriptionPagination">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
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
                    <p className="descriptionPagination">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <ul className='names'>
                        {elements}
                    </ul>
                </>
            )
        }
    }
}

export default PaginationFundations;