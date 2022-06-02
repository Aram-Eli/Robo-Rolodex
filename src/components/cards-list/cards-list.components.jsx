import { Component } from 'react';

import Card from '../card/card.components';
import './card-list.styles.css';


class CardList extends Component {
    
    render() {
        // Destructuring
        const { monsters } = this.props;

        return (

            <div className="card-list">
              {monsters.map((monster) => {
                  return <Card monster={monster}/>;
                })}
            </div>
        )
    }
}


export default CardList;