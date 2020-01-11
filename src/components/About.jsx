import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

function About() {
    const msg = useContext(UserContext)
    return (
        <div>
            About
        </div>
    )
}

export default About