import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

function About() {
    const {value, setValue} = useContext(UserContext)
    return (
        <div>
            <h2>About</h2>
           <div>{value}</div>
           <button onClick={ () => {
               setValue(value + 1)
           }}>change value</button>
        </div>
    )
}

export default About