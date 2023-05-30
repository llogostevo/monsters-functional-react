import { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        const {name, email, id} = this.props.monster;
        return(
            <div className='card-container' key={id}>
                        <img src={`https://robohash.org/${id}?set=set2&size=180x180`}alt="Monster" />
                        <h1  key={id}>{name}</h1>
                        <p>{email}</p>
                    </div>
        )
    }
}

export default Card;