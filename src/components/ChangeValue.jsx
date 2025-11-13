import React from "react";
import { useState } from "react";

function ChangeValue() {
    let defaultName ='Mr.Bean'
    let [name,setName] = useState('Ms.Poornima')
    
// directly using the string state value
// demonstrates how useState updates a simple string value


    function handleClick(a) {
        setName(a)
    }
    return (
        <>
        <h1>Name:{name}</h1>
        <button onClick={()=>handleClick(defaultName)}>Make Default</button>
        </>
    )
    }
export default ChangeValue;