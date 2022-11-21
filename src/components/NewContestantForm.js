import React, { useState } from "react";


const emptyForm = {
  name: "",
  image: "",
  year: "",
  location: "",
  word: "",
  definition: ""
}

function NewContestantForm( {onAddNewContestant} ) {
  const [formData, setFormData] = useState(emptyForm);
  console.log(formData)


const handleChange = (event) => {

   const {name, value} = event.target;

  setFormData((formData) => ({
       ...formData,
       [name]: value
    }))

    console.log(formData.name)
 
}

   const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3004/champions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...formData})
    }) .then(response => response.json())
       .then(data => onAddNewContestant(data))
       .then(() => setFormData(emptyForm));
}

    return (
      <div className="new-contestant-form">
        <h2>Add a new Champion!</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="name" 
          value={formData.name} 
          placeholder="Contestant name" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="image" 
          value={formData.image} 
          placeholder="Image URL" 
          onChange={handleChange}
          />
          <input 
          type="number"
          min="1900"
          max="2099"
          step="1" 
          name="year"  
          value={formData.year} 
          placeholder="Year" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="location" 
          value={formData.location} 
          placeholder="Hometown" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="word" 
          value={formData.word} 
          placeholder="Winning word" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="definition" 
          value={formData.definition} 
          placeholder="Definition of winning word" 
          onChange={handleChange}
          />
          <button type="submit">Add New Champion</button>
        </form>
      </div>
    );
  }

export default NewContestantForm;

