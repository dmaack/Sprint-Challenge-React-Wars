import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';


function CharacterList() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios 
            .get('https://swapi.co/api/people/')
            .then(response => {
                const newCharacter = response.data.results;
                console.log('star wars characters' , response);
                setCharacter(newCharacter);
            })
            .catch(error => {
                console.log('The data was not returned', error);
            })
    }, []);
    return (
        <div className='character'>
            {character.map(item => {
                return (
                    
                    <CharacterCard 
                        key={item.id}
                        name={item.name}
                        birthyear={item.birth_year}
                        homeworld={item.homeworld}
                    />
                );
            })}
        </div>
    )

}

export default CharacterList;