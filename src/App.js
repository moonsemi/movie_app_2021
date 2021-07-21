import React from 'react';

// jsx = HTML + JavaScript !!!
// props = property props -> argument
function Food({fav}){
  // = function Food(props.fav){ -> ES6문법 : props.fav = {fav} 
  // console.log(props.fav);
  return (
    <h2>I love {fav}</h2>
  );
}

function App() {
  return ( 
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="Kimchi" />
      <Food fav="Ramen" />
      <Food fav="Udong" />
    </div>
  );
}

export default App;
