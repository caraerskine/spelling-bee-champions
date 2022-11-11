import React, { useState } from "react";

//react makes it easy to manipulate data using forms and 
//form input values can be set to state values and updated via react events.
//defining a form's input value via state is considered a controlled component.
//this is a controlled form it links a value to our state variable so state controls the form's data
//making it easier for us to control the data
//state is dynamic and powerful
//anything in state is able to be manipulated
//using state to interact with the input value

//a controlled form 
//state and setState aka state variables allow for flow. The flow "pushes" the value changes to the form
//component so the form component always has the current value of the input. Data and UI are always in sync.

//reset form
//using state to create an object 
//i am referring to line 18
//when the form state is updated, the entire state gets rewritten

const emptyForm = {
  name: "",
  image: "",
  year: "",
  location: "",
  word: "",
  definition: ""
}

function NewContestantForm( {onAddContestant} ) {
  const [formData, setFormData] = useState(emptyForm);

  console.log(formData)

//newContestant = formData
//setNewContestant = setFormData
//initialState = emptyForm
//currentNewContestant = formData

//a setter function only does something when a new argument (new obj or variable or an array) is passed into it
//if not, initial state value will be shown
//checks to see if setNewContestant had been run, and can update the value
//of newContestant, and the compoenent gets re-rendered

//upon rendering the page, useState sets the initial value of the form that I want filled out
//and sets it according to the key value pairs in the initialState object
//newContestant is a variable
//when it gets filled in with the value, that value becomes newContestant

//with a static variable there is no re-render
//state holds its value between the renders which is why we use state in forms
//that is what makes them controlled it is controlled by state

//receiveing it from state
//setting state as an object and 
//callback function on it
//talk about the handle change
//effective because we can give names to the inputs
//thats what we can set the state with

//handlechange is how we get controlled form, updates state to reflect what get put into the fields as user enters info
//handle change happens when the event happens and the event is someone typing in
//setNewContestant setter fn is a callback fn 
//take copy of of currentNC
//target name rpesents the field and the target value reps what they put it the form field
//the callback fn is passed into setNewContestant as an argument (currentNewContestant)

//the setter function allows the progrmamer to cpature data and store it in a varibale 
//calling it on line 62
//return on line 66 the rest of the base value variables (currentNewContestant)
//line 68 fill in name and value, what user is putting in
//

const handleChange = (event) => {

  const {name, value} = event.target;

  setFormData((formData) => ({

       ...formData,
       [name]: value
  }))

  console.log(formData.name)

}

//when this line runs the state has not finished updating
  //chaning form data due to targeted events
  //line 80 the setter function setFormData is taking in an argument of formData(current value of the state of formData) and it is returning the spread out version (using spread operator  makes a shallow copy and then adds the key values, e.target.name, etc., returns the value without mutating the original array) of formData and the changed values from the user's input get added 

//passing set champions to add contesant form
//when i add it i am setting champions

//clicks the submit button when everyhitng the added to the fllds get submitted

//line 91 body: newContestant in my initial state passed into the JSON
//stringify turns it into json on the back end so it can be received in proper format
//turned into JSON
//then on the second .then 

   const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3004/champions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...formData})
    }) .then(response => response.json())
       .then(data => onAddContestant(data))
       .then(() => setFormData(emptyForm));
}

//stringify makes it one string in a box not little boxes 
//line 110 spread operator, it is changing the shallow copy not the initial formData
//.then response is that the data has been received
//the second .then 
//reset form 
//reset the new contestant 
//use spread operator to add data 
// on line 91 that is what is setting it to empty after I submit, clears it out to default state  

//just updating a variable does not cause a re-render
//you would need state or props
//re-renders are triggered by updated state

//git checkout main

//Below is my form with several controlled inputs. The input is controlled because it I set its value via a prop.
 // see Line 125 value={newContestant.name}

 //About handleChange in my form. handleChange is called everytime a new character is typed in the input field. It takes in the new value of the input
 //and sets it in state. It starts out as an empty string, you type "a" and handleChange takes in the event and calls setNewContestant
 //taking in currentNewContestant as a variable and returns the currentNewContestant with all of its name and values that the user has put in.
 
 //The handleSubmit is called on the form and gets the current values and adds them to the array when the submit button is pressed
 //by the user has an onSubmit action which triggers the handleSubmit method. handleSubmit function above then takes in that event and makes a 
 //POST request 

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

