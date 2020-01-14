import React, {Component} from "react";

class PaginationOrganizations extends Component {
    state = {
        organizationsNames: [
            {
                name: 'Organizacja "Lorem Ipsum 1"',
                mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nam.',
                needs: 'lorem, ipsum, dolor, sit, amet'
            },
            {
                name: 'Organizacja "Lorem Ipsum 2"',
                mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                needs: 'consectetur, adipisicing, elit'
            },
            {
                name: 'Organizacja "Lorem Ipsum 3"',
                mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo!',
                needs: 'blanditiis, deserunt, dolore, ducimus, eligendi, esse, facilis'
            },
            {
                name: 'Organizacja "Lorem Ipsum 4"',
                mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, mollitia rem?',
                needs: 'hic, nemo, numquam, optio, rerum, veritatis, vitae'
            },
            {
                name: 'Organizacja "Lorem Ipsum 5"',
                mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                needs: 'assumenda, molestiae, velit'
            },
            {
                name: 'Organizacja "Lorem Ipsum 6"',
                mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                needs: 'dolor, harum, obcaecati, pariatur, repellat'
            }
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
                    <p className="organisationName">{organizationName.name}</p>
                    <p className="organisationMission">Cel i misja: {organizationName.mission}</p>
                </div>
                <div>
                    <p className="organisationNeeds">{organizationName.needs}</p>
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
                    <p className="descriptionPagination">Cholera jasna! Won mi tu stąd, jeden z drugim! Będzie mi tu kłaki rozrzucał! Panie! Tu nie jest salon damsko-męski! Tu jest kiosk RUCH-u! Ja... Ja tu mięso mam!</p>
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
                    <p className="descriptionPagination">Cholera jasna! Won mi tu stąd, jeden z drugim! Będzie mi tu kłaki rozrzucał! Panie! Tu nie jest salon damsko-męski! Tu jest kiosk RUCH-u! Ja... Ja tu mięso mam!</p>
                    <ul className='names'>
                        {elements}
                    </ul>
                </>
            )
        }
    }
}

export default PaginationOrganizations;