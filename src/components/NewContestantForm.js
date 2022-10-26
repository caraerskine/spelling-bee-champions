import React, { useState } from "react";


function NewContestantForm( ) {

  const [newContestant, setNewContestant] = useState({
     name: "",
     image: "",
     year: 0,
     location: "",
     word: "",
  });

function handleChange() {
  
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
          />
          <input 
          type="number" 
          name="year" 
          value={newContestant.year} 
          placeholder="Year" 
          />
          <input 
          type="text" 
          name="location" 
          value={newContestant.location} 
          placeholder="Hometown" 
          />
          <input 
          type="text" 
          name="word" 
          value={newContestant.word} 
          placeholder="Winning word" 
          />
          <button type="submit">Add New Champion</button>
        </form>
      </div>
    );
  



export default NewContestantForm;