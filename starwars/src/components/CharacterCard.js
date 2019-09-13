import React from 'react';

const CharacterCard = props => {
    return (
        <div className='character-list' key={props.id}>
            <h2>{props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Home: {props.homeworld}</p>
        </div>
    )
}

export default CharacterCard;