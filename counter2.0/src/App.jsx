import React, { useState} from "react";
import "./Styles/App.css";

function App() {
   const [counter, setCounter] = useState(0);
  const isPrime = (num)=>{
    if(num < 2)return false;
    for(let i=2; i<=Math.sqrt(num);i++){
      if(num % i === 0)return false;
    }
    return true;
  };
  return (
  
    <div className="App">
      <h1>Welcome to Counter 2.0</h1>
      
      <div className="btns">
        <button id="button" data-testid="minusonebtn" onClick={()=>setCounter(counter - 1)} disabled={counter===0}>-1</button>
        <button  id="button" data-testid="plusonebtn" onClick={()=>setCounter(counter + 1)}>+1</button>
        <button  id="resent-btn" data-testid="resetbtn" onClick={()=>setCounter(0)}>Resent Count</button>
      <div>
        
      </div>
      </div>
       <span  id="count"data-testid="counter">Count:{counter}</span>
      <div>
        <span id="even" data-testid="odd-or-even">This number is:{counter % 2 === 0 ? "Even" : "Odd"}</span>
        
        <span id="prime" data-testid="is-prime">Prime number:{isPrime(counter).toString()}</span>
      </div>
    </div>
  );

}

export default App;

