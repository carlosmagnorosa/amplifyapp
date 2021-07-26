import React, { useState } from "react";


 export function MyCounter() {
     const [counter, setCounter] = useState(0);
     return <div>
            <h3>Counter {counter}</h3>
            <button  className="Counter-btn" type="button" aria-label="Increment" onClick={()=>{setCounter(counter + 1)}} >
                Increment
            </button>
            <button className="Counter-btn" type="button" aria-label="Decrement" onClick={()=>{setCounter(counter - 1)}} >
                Decrement
            </button>
        </div>
 }

