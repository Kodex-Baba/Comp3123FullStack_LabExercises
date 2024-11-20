import React from 'react'
import { useEffect, useState } from "react";

export default function UseEffectExample() {
    let [state, setState] = useState({name: 'Akorede'})

    useEffect(() => {
        console.log("first")

        return () => {
            console.log("second")
        }
    }, [state.name])

    return (
        <div>
            <h2>useEffect() Example</h2>
            <p>Name: { state.name }</p>
            <button onClick={ (e) => setState({name: 'Akorede Osunkoya'})} >Update Name</button>
        </div>
    )
}
