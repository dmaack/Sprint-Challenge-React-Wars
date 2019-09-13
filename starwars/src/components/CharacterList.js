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
        <div className='container'>
            <div className='entry'>
            {character.map((item, index) => {
                return (
                    
                    <CharacterCard 
                        key={index}
                        name={item.name}
                        birthyear={item.birth_year}
                        gender={item.gender}
                        height={item.height}
                        eyecolor={item.eye_color}
                        created={item.created}
                    />
                );
            })}
            </div>
        </div>
    )

}

export default CharacterList;