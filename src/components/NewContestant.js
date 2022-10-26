import React from "react";


function NewContestant() {

    
    return (
      <div className="new-contestant-form">
        <h2>Add a new Champion!</h2>
        <form>
          <input type="text" name="name" placeholder="Contestant name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="number" name="year" placeholder="Year" />
          <input type="text" name="location" placeholder="Hometown" />
          <input type="text" name="word" placeholder="Winning word" />
          <button type="submit">Add New Champion</button>
        </form>
      </div>
    );
  }



export default NewContestant;