import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

const AuthContext = React.createContext()

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // function signup(email, password) {
    //     return auth.createUserWithEmailAndPassword(email, password)
    // }

    async function signup (email, password) {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user
            setCurrentUser(user)
        } catch (err) {
            alert(err.message)
        }
    }

    async function login (email, password) {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            alert(err.message)
        }
    }

    async function logout () {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}