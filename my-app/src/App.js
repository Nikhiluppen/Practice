import React, { useState}  from 'react';

export const App = () => {
   const array = useState (0);
   const counter = array[0];
   const setCounter = array[1];

   function increaseCounter(){

  setCounter(counter+1);
   }
   console.log(array);
  return (
    <div>App
      <h1>Counter: {counter} </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};
export default App;
