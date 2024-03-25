import React from 'react'
import { useState,useEffect,useRef } from 'react'

const App_1 = () => {

    const [count,setcount] =useState(0)
    const ref = useRef(0)
    //counter function
    const counter = ()=>{
    setcount(count+1);
    }
    // useEffect
    useEffect(()=>{
      ref.current.style.backgroundColor="red"
    },[count])
    
      return (
       <>
       <h1>counter value is {count}</h1>
       <button ref={ref} onClick={counter}>counter</button>
       <button onClick={()=>{ref.current.style.display="none"}} >Hide btn </button>

       </>
      )
}

export default App_1

// ...........................Notes......................

// Direct DOM Manipulation:
// Direct DOM manipulation involves accessing DOM elements using methods like document.
// getElementById, querySelector, or accessing properties directly via JavaScript.
// While this approach is straightforward, it bypasses React's virtual DOM and can potentially lead to issues with React's reconciliation process.
// It can cause inconsistencies in the application's state and the DOM, leading to hard-to-debug issues.
// Direct DOM manipulation is generally discouraged in React because it can lead to unexpected behavior and makes the code harder to maintain.



// In summary, while both direct DOM manipulation and useRef allow access to DOM elements, 
// useRef is the preferred approach in React as it integrates better with React's component lifecycle and reconciliation process,
// leading to cleaner and more maintainable code. 
// It ensures that changes to the DOM are properly managed within the React component model.






