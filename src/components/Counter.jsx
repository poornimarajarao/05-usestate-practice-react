import { useState } from "react"
import React from "react";

// directly using the numeric state value
// demonstrates how useState updates a simple number value

function Counter() {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count+1)
   }
    return (
        <>
            <section className="container-fluid mt-4 h-50">
                <div className="row">
                    <div className="col-4 m-auto w-25">
                        <div className="card mt-5">
                            <div className="card-header bg-dark text-white text-center">
                                <h4>Counter App</h4>
                            </div>
                            <div className="card-body text-center">
                                <h2>{count}</h2>
                                <button className="btn btn-dark" onClick={handleClick}>Click</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter