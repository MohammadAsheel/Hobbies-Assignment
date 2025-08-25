import React from 'react';
import './Card.css';

function Card({ tittle, description, imageUrl}) {
    return (
        <div className='card'>
            <img src={imageUrl} alt={tittle} />
            <h2>{tittle}</h2>
            <p>{description}</p>


        </div>
    )
}

export default Card;