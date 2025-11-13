
import React, { useState } from "react";
// using an object as state to store multiple properties
// demonstrates how useState can manage an object
function Objects() {
    let [detail,setDetail]=useState({name:'Tom',age:'23'})
    function handleClick(){               // change age only
        setDetail({...detail,name:'Max'}) // ...detail copies all existing properties (name and age)
    }                                    
    return(
        <>
        <h1>Name:{detail.name}</h1>
        <h3>Age:{detail.age}</h3>
        <button onClick={handleClick}>Change name</button>
        </>
    )
}
export default Objects