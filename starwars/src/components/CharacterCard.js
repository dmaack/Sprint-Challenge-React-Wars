import React from 'react';
import { CardText, CardBody } from 'reactstrap';
  import styled from 'styled-components';


const StarwarsCard = styled.div`
  background: #FFEBCD;
  color: black;
  width: 300px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  
`;

const CharacterTitle = styled.h2`
  fonst-size: 2rem;
`;

const CharacterImg = styled.img`
  width: 300px;
  height: 350px;
  object-fit: scale;
  flex-shrink: 2;
  padding: 0 2%;
`;


  
  const CharacterCard = (props) => {
    return (
      <div>
        <StarwarsCard>
          <CardBody>
            <CharacterTitle>{props.name}</CharacterTitle>
          </CardBody>
          <CharacterImg width="100%" src="https://source.unsplash.com/random/outerspace" alt="Space images" />
          <CardBody>
            <CardText><strong>Birth Year: </strong>{props.birthyear}</CardText>
            <CardText><strong>Gender: </strong>{props.gender}</CardText>
            <CardText><strong>Height: </strong>{props.eyeheight}</CardText>
            <CardText><strong>Eye Color: </strong>{props.eyecolor}</CardText>
            {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
          </CardBody>
        </StarwarsCard>
      </div>
    );
  };
  
  export default CharacterCard;