import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContestantCard( {champion} ) {

    const [isOn, setIsOn] = useState(false)
   
   function handleClick() {
    setIsOn(prevIsOn => !prevIsOn)
   }

   //updating state is async

const showWord = (
    <>
        <li>Winning word: <strong>{champion.word}</strong></li>       
        <p></p>
    </>
);

    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={champion.image} />
                 <Card.Body>
                     <Card.Title><h2>{champion.name}</h2></Card.Title>
                         <Card.Text>Championship: {champion.year}</Card.Text>
                            <Card.Text>Hometown: {champion.location}</Card.Text>
                        <div>
                            {isOn && showWord} 
                            <Button onClick={handleClick} variant="primary">See {champion.name}'s winning word!</Button>
                            <Card.Text></Card.Text>
                        </div>
                </Card.Body>
        </Card>   
    </div>
   );
}      
    export default ContestantCard;

    //state udates and component is re-rendered 
    //line 29 logical statement with And operator returns the right side of the statement 
    //a click triggers handleclick function, changes state to opposite of where it is
    //false is default, so when it is clciked it becomes true and it gts displayed 
    //line 29 is passing in a prop, isOn and showWord are props that is affecting what is being displayed 
    //not handling any logic handling the display
    //jsx returns elements
    //the props on line 29, in the return 
    //line 29 is what is to be displayed when button is clicked 
    //line 9-18 handles the actual logic 