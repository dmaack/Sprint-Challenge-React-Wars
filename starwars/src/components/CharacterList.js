import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';


const CharactersButton = styled.button`
    width: 100px;
    height: 30px;
    border: 0;
    margin: 5px 10px;
    transition: 0.2s ease-in;
`;

function CharacterList() {
    const [character, setCharacter] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://swapi.co/api/people/')
    const [nextPage, setNextPage] = useState('https://swapi.co/api/people/')
    const [previousPage, setPreviousPage] = useState('https://swapi.co/api/people/')

    useEffect(() => {
        axios 
            .get(currentPage)
            .then(response => {
                const newCharacter = response.data.results;
                console.log('star wars characters' , response);
                setCharacter(newCharacter);
                setNextPage(response.data.next);
                setPreviousPage(response.data.previous);
            })
            .catch(error => {
                console.log('The data was not returned', error);
            })
    }, [currentPage]);
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
            <CharactersButton previous onClick={() => setCurrentPage(previousPage)}>Previous</CharactersButton>
            <CharactersButton previous onClick={() => setCurrentPage(nextPage)}>Next</CharactersButton>
        </div>
    )

}

export default CharacterList;