import React, { useState } from "react";


function NewContestantForm( ) {

  const [newContestant, setNewContestant] = useState({
     name: "",
     image: "",
     year: 0,
     location: "",
     word: "",
  });

function handleChange(e) {
  setNewContestant((currentNewContestant) => {
    return {
       ...currentNewContestant,
       [e.target.name]: e.target.value,

    }
  })
}


} 

    
    return (
      <div className="new-contestant-form">
        <h2>Add a new Champion!</h2>
        <form>
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
          <button type="submit">Add New Champion</button>
        </form>
      </div>
    );
  



export default NewContestantForm;