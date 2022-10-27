import React, { useState } from "react";

const baseValue = {
  name: "",
  image: "",
  year: "",
  location: "",
  word: "",
  definition: ""
}

function NewContestantForm( {setChampions}) {
  const [newContestant, setNewContestant] = useState(baseValue);

  console.log(newContestant)

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
    fetch("http://localhost:3004/champions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newContestant)
    }) .then(r => r.json())
       .then (data => handleAddNewContestant(data));
}
 

   function handleAddNewContestant(data) {
     setNewContestant(baseValue) 
     setChampions((currentContestants) => [...currentContestants, data])      
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
          type="number"
          min="1900"
          max="2099"
          step="1" 
          name="year"  
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
          name="definition" 
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

