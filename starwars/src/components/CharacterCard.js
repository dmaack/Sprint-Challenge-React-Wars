import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import styled from 'styled-components';


const StarwarsCard = styled.div`
  background: white;
  color: black;
  width: 300px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CharacterImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: scale;
  flex-shrink: 2;
`;
  
  const CharacterCard = (props) => {
    return (
      <div>
        <StarwarsCard>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
          </CardBody>
          <CharacterImg width="100%" src="https://source.unsplash.com/random/outerspace" alt="Space images" />
          <CardBody>
            <CardText>Birth Year: {props.birthyear}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Height: {props.eyeheight}</CardText>
            <CardText>Eye Color: {props.eyecolor}</CardText>
            {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
          </CardBody>
        </StarwarsCard>
      </div>
    );
  };
  
  export default CharacterCard;