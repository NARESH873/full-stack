import React, { useState } from 'react'

export const UseState = () => {
    const [count,setCount] =useState(0)
    const [value,setValue] =useState("");
    const
  return (
    <div>
    <h1>[value</h1>
    <input type="text" onChange={(e)=>setValue(e.target)}>
    <h1>{}count</h1>
    <button onClick={handleDecrement}>Decrement</button>g 
    <button onClick={handleDecrement}>Decrement</button>
    
    
    
    
    
    </div>
  )
}
