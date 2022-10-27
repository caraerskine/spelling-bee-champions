import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContestantCard( {champion} ) {

    const [isOn, setIsOn] = useState(false)

   function handleClick(e) {
    console.log(handleClick)
   }

const showWord = (
    <>
        <li>Winning word: <strong>{champion.word}</strong></li>
        <li>Definition: <strong>{champion.definition}</strong></li>
    </>
)

    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={champion.image} />
                 <Card.Body>
                     <Card.Title><strong><h2>{champion.name}</h2></strong></Card.Title>
                         <Card.Text>
                            <li>Championship: {champion.year}</li>
                            <li>Hometown: {champion.location}</li>
                        </Card.Text>
                      <Button onClick={() => handleClick} variant="primary">See {champion.name}'s winning word!</Button>
                 <h3></h3>
                   {!isOn ? (
                       true
                   ) : (
                      showWord
                   )}
                 </Card.Body>
             </Card>      
    </div>
    
   

      );
    }

    export default ContestantCard;


    //need handle click on winning word button 

    // <li>Winning word: <strong>{champion.word}</strong></li>
    // <li>Definition: <strong>{champion.definition}</strong></li>