import React from 'react'

const SpotifyLogin = () => {
    const CLIENT_ID = '5662f43f1dd449b2a9a382bbfa231044';
    const REDIRECT_URI = 'http://localhost:3000/';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
    return (
        <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        </div>
    )
}

export default SpotifyLogin