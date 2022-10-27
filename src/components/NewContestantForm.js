import React, { useState } from "react";

//reset form below
const baseValue = {
  name: "",
  image: "",
  year: "",
  location: "",
  word: "",
}

function NewContestantForm( {setChampions}) {
  const [newContestant, setNewContestant] = useState(baseValue);

function handleChange(e) {
  setNewContestant((currentNewContestant) => {
    return {
       ...currentNewContestant,
       [e.target.name]: e.target.value
    }
  })
}

   function handleSubmit(e) {
    e.preventDefault();
    fetch("/newcontestantform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newContestant)
    }) .then(r => r.json())
       .then (data => handleAddNewContestant(data));
}
 

   function handleAddNewContestant(data) {
     setNewContestant(baseValue) //reset form
     setChampions((currentContestants) => [...currentContestants, data])      //add to array but don't change array 
}


    return (
      <div className="new-contestant-form">
        <h2>Add a new Champion!</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="name" 
          value={newContestant.name} 
          placeholder="Contestant name" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="image" 
          value={newContestant.image} 
          placeholder="Image URL" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="year"   //help here w number 
          value={newContestant.year} 
          placeholder="Year" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="location" 
          value={newContestant.location} 
          placeholder="Hometown" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="word" 
          value={newContestant.word} 
          placeholder="Winning word" 
          onChange={handleChange}
          />
           <input 
          type="text" 
          name="word" 
          value={newContestant.definition} 
          placeholder="Definition of winning word" 
          onChange={handleChange}
          />
          <button type="submit">Add New Champion</button>
        </form>
      </div>
    );
  }



export default NewContestantForm;


//"http://localhost:3004/champions"
//if above fetch is weird replace it w this