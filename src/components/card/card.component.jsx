import { Component } from 'react';
import './card.css';


const Card = ({monster}) => {
    const {name, email, id} = monster;
    return(
        <div className='card-container' >
                        <img src={`https://robohash.org/${id}?set=set2&size=180x180`}alt="Monster" />
                        <h1>{name}</h1>
                        <p >{email}</p>
                    </div>

    );
};


export default Card;