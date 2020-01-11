import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Home() {
    const {value, setValue} = useContext(UserContext)
    return (
        <div>
            <h2>Home</h2>
            {value}
        </div>
    )
}

export default Home