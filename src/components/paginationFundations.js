import React, {Component} from "react";

class PaginationFundations extends Component {
    state = {
        fundationsNames: [
            {
                name: 'Fundacja "Miś"',
                mission: 'Nie ma takiego miasta - Lądyn! Jest Lądek, Lądek Zdrój, tak...',
                needs: 'Czy konie mnie słyszą?'
            },
            {
                name: 'Fundacja "Poszukiwany poszukiwana"',
                mission: 'Chodzi o potwierdzenie procentu cukru w cukrze... ',
                needs: 'Mój mąż? Mój mąż z zawodu jest dyrektorem!'
            },
            {
                name: 'Fundacja "Alternatywy 4"',
                mission: 'Tak... nie znałem pańskiego ojca, ale to jest bez znaczenia.',
                needs: 'A ja mam długopis.'
            },
            {
                name: 'Fundacja "Co mi zrobisz, jak mnie złapiesz?"',
                mission: 'Tu nie można palić.',
                needs: 'Wiem, ale ja się nie zaciągam.'
            },
            {
                name: 'Fundacja "Poszukiwany poszukiwana"',
                mission: '...to nie czernie źle przebijają świetlistość błękitu, tylko właśnie błękity nie dźwięczą.',
                needs: 'To jezioro damy tutaj, a ten niech sobie stoi w zieleni.'
            },
            {
                name: 'Fundacja "Brunet wieczorową porą"',
                mission: 'Halo, Kazik?',
                needs: 'Nie, nie Kazik, Jola.'
            },
            {
                name: 'Fundacja "Miś"',
                mission: 'Straszne tu się chamstwo zjeżdża z całego świata. Kasza niedogotowana.',
                needs: 'Przyszłem wcześniej, gdyż nie miałem co robić.'
            },
            {
                name: 'Fundacja "Co mi zrobisz, jak mnie złapiesz?"',
                mission: 'No pewnie, bo po co by wyrywał?! To złodziej!',
                needs: 'I pijak! Bo każdy pijak to złodziej!'
            },
            {
                name: 'Fundacja "Alternatywy 4"',
                mission: 'Yyy... pytał mnie tu dzielnicowy, kto w naszym bloku po nocy pisuje na maszynie?',
                needs: 'Dlaczego właśnie po nocy? Ja pisuję również w dzień.'
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
        const {fundationsNames, currentPage, namesPerPage} = this.state;

        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;

        const currentNames = fundationsNames.slice(indexOfFirst, indexOfLast);

        const elements = currentNames.map((fundationName, i) => {
            return <li key={i} className='organisationDescription'>
                <div>
                    <p className="organisationName">{fundationName.name}</p>
                    <p className="organisationMission">Cel i misja: {fundationName.mission}</p>
                </div>
                <div>
                    <p className="organisationNeeds">{fundationName.needs}</p>
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
                    <p className="descriptionPagination">Hej młody Junaku, smutek zwalcz i strach. Może na tym piachu za trzydzieści lat przebiegnie, być może, jasna, długa, prosta, szeroka jak morze Trasa Łazienkowska!</p>
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
                    <p className="descriptionPagination">Hej młody Junaku, smutek zwalcz i strach. Może na tym piachu za trzydzieści lat przebiegnie, być może, jasna, długa, prosta, szeroka jak morze Trasa Łazienkowska!</p>
                    <ul className='names'>
                        {elements}
                    </ul>
                </>
            )
        }
    }
}

export default PaginationFundations;