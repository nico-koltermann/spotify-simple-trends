import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import './css/App.css'

/**
 * Header bar, which handles the auth to the spotify app
 */
function App() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token");

      if (!token && hash) {
            let el = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"));
            if ( el !== undefined) {
                token = el.split("=")[1] || "";
            } else {
                token = "";
            }

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken("" + token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }

  const scope = 'user-read-playback-position user-top-read user-read-recently-played';

  return (
          <header className="App-header d-flex flex-row justify-content-around">
              <h1>Spotify-Trends</h1>
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <div>
                        <Button className="spotify-button" onClick={logout}>Logout</Button>
                    </div>}
          </header>
  );
}

export default App;