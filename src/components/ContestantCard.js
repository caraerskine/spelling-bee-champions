import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContestantCard( {champion} ) {

    const [isOn, setIsOn] = useState(false)

   
   function handleClick() {
    setIsOn(isOn => !isOn)
   }

const showWord = (
    <>
        <li>Winning word: <strong>{champion.word}</strong></li>  
        <p></p>
    </>
)

    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={champion.image} />
                 <Card.Body>
                     <Card.Title><h2>{champion.name}</h2></Card.Title>
                         <Card.Text>
                            <><p className="a">Championship: {champion.year}</p></>
                            <><p className="a">Hometown: {champion.location}</p></>
                         </Card.Text>
                           <div>
                            {!isOn ? (
                               true
                              ) : (
                             showWord
                            )}
                            <Button onClick={handleClick} variant="primary">See {champion.name}'s winning word!</Button>
                        </div>
                </Card.Body>
        </Card>   
    </div>
   );
}      
    export default ContestantCard;
