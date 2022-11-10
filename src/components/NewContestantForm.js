import React, { useState } from "react";

//reset form
//using state to create an object 
//i am referring to line 18
//when the form state is updated, the entire state gets rewritten

const baseValue = {
  name: "",
  image: "",
  year: "",
  location: "",
  word: "",
  definition: ""
}

function NewContestantForm( {setChampions} ) {
  const [newContestant, setNewContestant] = useState(baseValue);

  console.log(newContestant)


  let value = 0
   value++
   console.log(value)

   //forms 
//this is a controlled form it links a value to our state variable so state controls the form's data
//making it easier to control the data


//with a static variable there is no re-render
//state holds its value between the renders  

//receiveing it from state
//setting state as an obejct and 
//callback funciton on it
//talk about the handle change
//effective because we can give names to the inputs
//thats what we can set the state with
//state is dynamic and powerful
//anything in state is able to be manipulated


//handlechange is how we get controlled form, updates state to reflect what get put into the fields as user enters info
//handle change happens when the event happens and the event is someone typing in
//setNewContestant setter fn is a callback fn 
//take copy of of currentNC
//target name rpesents the field and the target value reps what they put it the form field
//the callback fn is passed into setNewContestant as an argument (currentNewContestant)

function handleChange(e) {
  setNewContestant((currentNewContestant) => {

    return {
       ...currentNewContestant,
       [e.target.name]: e.target.value
    }
  })

  console.log(newContestant.name)
  //when this line runs the state has not finished updating
  //
}

//app at top
//passing set champions to add contesant form
//when i add it i am setting champions

//store it where it persists
//submitting it to the API itself
//submit to the post req of champions 

//clicks the submit button when everyhitng the added to the fllds get ssubmitted


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

//reset form 
//reset the new contestant 
//use spread operator to add data 
// on line 91 that is what is setting it to empty after I submit, clears it out to default state  

   function handleAddNewContestant(data) {
     setNewContestant(baseValue) 
     setChampions((currentContestants) => [...currentContestants, data])      
}


//just updating a variable does not cause a re-render
//you would need state or props
//re-renders are triggered by updated state

//git checkout main


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

