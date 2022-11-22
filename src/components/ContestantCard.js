import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContestantCard( {id, champion, onRetiredChampions} ) {

    const [isOn, setIsOn] = useState(false)
    
    const {name, image, year, location, word, retired} = champion;
   
   function handleClick() {
    setIsOn(prevIsOn => !prevIsOn)
   }

   const handleRetiredClick = () => {
    fetch(`http://localhost:3004/champions/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({retired: !retired})
    })
    .then(response => response.json())
    .then(onRetiredChampions)
   }

const showWord = (
    <>
        <li>Winning word: <strong>{word}</strong></li>  
        <p></p>
    </>
);

    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
                 <Card.Body>
                     <Card.Title><h2>{name}</h2></Card.Title>
                         <Card.Text>Championship: {year}</Card.Text>
                            <Card.Text>Hometown: {location}</Card.Text>
                        <div>
                            {isOn && showWord}
                            <Button onClick={handleClick} variant="primary">See {name}'s winning word!</Button>
                            <Button onClick={handleRetiredClick}>{retired ? "Unretire" : "Send them to retirement"} </Button>
                            <Card.Text></Card.Text>
                        </div>
                </Card.Body>
        </Card>   
    </div>
   );
}      
    export default ContestantCard;


