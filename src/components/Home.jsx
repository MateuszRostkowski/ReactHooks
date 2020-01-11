import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Home() {
    const msg = useContext(UserContext)
    return (
        <div>
            <h2>Home</h2>
            {msg}
        </div>
    )
}

export default Home