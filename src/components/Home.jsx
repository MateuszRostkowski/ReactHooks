import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Home() {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default Home