import React from "react";
import Header from "./Header";
import ContestantContainer from "./ContestantContainer"

function App( {champions} ) {

  return (
    <div className="App">
      <Header />
      <ContestantContainer champions={champions} />
    </div>
  );
}

export default App;

