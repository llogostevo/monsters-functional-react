import { Component } from 'react';
import './card-list.css';


class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    const{name, email, id} = monster;
                    return (
                    <div className='card-container' key={id}>
                        <img src={`https://robohash.org/${id}?set=set2&size=180x180`}alt="Monster" />
                        <h1  key={id}>{name}</h1>
                        <p>{email}</p>
                    </div>


                );
                })}
            </div>
        );
    }
}

export default CardList;