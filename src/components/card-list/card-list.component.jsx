import { Component } from 'react';
import './card-list.css';
import Card from '../card/card.component';

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    // const{name, email, id} = monster;
                    return (
                    <Card monster={monster}/>
                );
                })}
            </div>
        );
    }
}

export default CardList;