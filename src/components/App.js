import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContestantPage from "./ContestantPage";
import Header from "./Header";
import NewContestantForm from "./NewContestantForm";
import Dictionary from "./Dictionary";
// import Liker from "./Liker";
// import Timer from "./Timer";
import Home from "./Home"


//what is going on above here?
//I'm importing all the components.
//App is my top level component
// I am importing hooks from react router, useState and useEffect
//Hooks allow me to hook into the features of react

//UseState
//useState is a hook that lets you add React state to function components
//State returns an array with a pair of elements: the current state and a setter function that updates it. 
//The only argument to the useState() hook is the initial state, could be false, could be an empty string, could be an empty array.
//State is data held internally by React that can be accessed in a component and changed over time. mutable.

function App() {

  const [champions, setChampions] = useState ([]); 

//setting state at top level
///initialize state and set it to an empty array because that is what we are starting with, and I am going to populate that array 
//with the data i fetch from the back end using useEffect and fetching that data
//initialized state could be empty (bag), and then it gets touched (bananas in bag)
//set it to an empty array because I am dealing with an array of objects
//champions is the current state and setChampions is the setter function that updates state, the argument as empty array is IDK
//setChampions is async

const API = "http://localhost:3004/champions/"

useEffect(() => {
  fetch(API)
    .then((response) => response.json())
    .then(data => setChampions(data));
}, []);

const handleAddNewContestant = (data) => {
  setChampions((champions) => [...champions, data])      
}

//useEffect is watching for the changes and will only run once on the initial render
//on 41 the value of response is the response you get from the API call once the fetch promise has been resolved. 
//wait until the promise from the API has been resolved then run this function, once it has been parsed once you 
//get the data and it is organized, set it to setChampions and then it is available to your react app

//.then returns a promise
//.then is async  
//Data fetching and manually changing the DOM in React components are all examples of side effects. 
//useEffect happens after the inital render, it runs after the component is mounted
//This get request uses the URL endpoint, we want to make this request once our component has mounted, thus useEffect.
//I am using the setter function setChampions in the second .then and
//setChampions updates state with the data i just fetched 
//by using the useEffect hook I am telling react that my component needs to do something after render.
//it runs after the first render and after every update.
//the dependency array is put in as the second argument 
//because React's default is to keep re-rendering the component 
//and re-run useEffect, over and over
//the dependency array as the second argument prevents that


//three instances:
//useEffect(() => {}): No dependencies array
//Run the side effect every time our component renders (whenever state or props change) it is going to happen every single time React goes through a re-render cycle

//useEffect(() => {}, []): Empty dependencies array
//Run the side effect only the first time after our component mounts. This means that React will run it once and then stop looking for it.

//useEffect(() => {}, [variable1, variable2]): Dependencies array with elements in it
//Run the side effect any time the variable1 or 2's change AND after the initial render 

//BONUS can return a clean-up function that would run before the useEffect callback and before the 
//component unmounts

//Lifecycle of a react component
//mounting, updating 
//useEffect runs once component is mounted, gets added to the DOM 
//QUESTION
//cleanup function runs before the useEffect callback fn and runs and before component unmounts 
//unmounting is used for a timer, setTimeout, setInterval


//Below are my components which are children of App 
//I am using Browser Router, which my App is wrapped in.
//I'm also importing Route and Switch
//Browser Router is a feature of React Router v5 which is a routing library for React that allows us to link
//to specific URLs and render components depending on which URL is displayed.
//Switch allows me to look through all the child routes and display the first one whose path matches the current URL.
//if Switch were not here the path could never get changed and multiple matched routes could render at once
//Route's basic responsibility is to render some UI when its path matches the current URL. Route exact path is the navigation.
//in a SPA app there is not a new fetch req with each path change and there is no new req for an HTML document
//that is why client-side routing is so speedy and convenient

//line 101 renders the champion page, the champions = {champions} is what tells it to render that page, 
//I am passing it in as a prop.

//Both props and state are plain JS objects
//Both props and state changes trigger a render update

  return (
    <div className="App">
      <Header /> 
        <NavBar />
        {/* <Liker />
        <Timer /> */}
          <Switch >
               <Route exact path="/championspage"> 
               <ContestantPage champions={champions} />
             </Route>   
             <Route exact path="/newcontestantform"> 
               <NewContestantForm setChampions={setChampions} onAddContestant={handleAddNewContestant} />
            </Route>   
             <Route exact path="/wordsanddefinitions"> 
               <Dictionary champions={champions}/>
             </Route>   
             <Route exact path="/"> 
               <Home />
             </Route> 
          </Switch>
    </div> 
  );
}

export default App;

