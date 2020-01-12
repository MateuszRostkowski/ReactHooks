import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useCounter } from "../hooks/useCounter"

function Memo() {
    const { count, setCount } = useCounter(4)
    const { user } = useContext(UserContext)
    return (
        <div>
            <h2>Memo</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>+ 1</button>
        </div>
    )
}

export default Memo