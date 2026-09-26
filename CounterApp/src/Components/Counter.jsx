import React, { useState } from 'react'

const Counter = () => {
    //here is where we put our JavaScript
    const [count, setCount]=useState(0)

    // this is the function to increase the count
    function increment(){
        setCount(count +5)
    }

    // this is the function to decrease the count
    function decrement(){
        setCount(count -1)
    }
  
        return (
    <div>
        {/* here is where we put both our html and javascript which is our jsx */}

        <button onClick={increment}>+</button>
        <h1>Count:{count}</h1>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter