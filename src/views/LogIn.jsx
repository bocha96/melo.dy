import React, { useEffect, useState } from 'react'
import SpotifyLogin from '../components/SpotifyLogin'
import Home from './Home'
import { Navbar } from '../components/Navbar'

const LogIn = () => {

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setToken(token)

        }
    }, [])

    return (
        <>
            <Navbar token={token} setToken={setToken} />
            {token ? (
                <Home />
            ) : <SpotifyLogin />
            }
        </>
    )
}

export default LogIn