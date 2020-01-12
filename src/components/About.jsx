import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { login } from "../utils/login"

function About() {
    const { user, setUser } = useContext(UserContext)
    return (
        <div>
            <h2>About</h2>
            <pre>{ JSON.stringify(user, null, 2) }</pre>
            { user ? (
                <button onClick={() => {
                    setUser(null)
                }}>logout</button>
            ) : (
                <button onClick={async () => {
                    const user = await login()
                    setUser(user)
                }}>login</button>
            )}

        </div>
    )
}

export default About