import { useState } from "react"
import React from "react";

//accessing the 'name' property of the state object
//demonstrates how useState can update an object property

function Name() {
    let [sName, setName] = useState({name:'Poornima R'})
    function handleClick() {
        setName({name:'P SR'})
   }
    return (
        <>
            <section className="container-fluid mt-4 h-50">
                <div className="row">
                    <div className="col-4 m-auto w-25">
                        <div className="card mt-5">
                            <div className="card-header bg-dark text-white text-center">
                                <h4>Update Name</h4>
                            </div>
                            <div className="card-body text-center">
                                <h2>{sName.name}</h2>
                                <button className="btn btn-dark" onClick={handleClick}>Click</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Name
