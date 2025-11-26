'use client'
import { useState } from "react";
import { useUser } from '@clerk/nextjs'
export const Counter = () => {
    const [count, setCount] = useState(0)
    // const { isLoaded, userId, sessionId, getToken } = useAuth()
    const { isLoaded, isSignedIn } = useUser()
    if (!isLoaded || !isSignedIn) {
        return null
    }
    return (
        <>
            <p>count {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}