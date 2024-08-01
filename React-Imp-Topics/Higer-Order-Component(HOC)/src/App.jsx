// Higher Order Components are Wrapper Functions

// WE Can USE ANY HOOK IN HOD COMPONENTS

// PRACTICAL USE

// rEAL EXAMPLE FOR HIGHER ORDER COMPONENT

// REACT . MEMO  ,,,  WITH ROUTER , CONNECT IN REACT REDUX

// LIMITATIONS OF HIGHER ODER COMPONENTS ARE ->

// PROP COLLOSION , MORE THAN ONE HOCS ME WRAP KR DIYA WE CAN WRAP WITH MULTIPLE HOC DUE TO THIS DIFFICULT TO DEBUG CODE

// TO SOLVE WE USE RENDER PROP  ,  CUSTOM HOOKS (kHUD K HOOKS)

import React from "react";
import ClickCounter from "./components/ClickCounter";
import Hover from "./components/Hover";

function App() {
  return (
    <div>
      <ClickCounter />
      <Hover />
    </div>
  );
}

export default App;
