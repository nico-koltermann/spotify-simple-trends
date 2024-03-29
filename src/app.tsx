import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import { GetProfile } from './api/profile-api';
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
      
      async function check() {
        return await GetProfile()
      };

      if (token) {
        if (check() === null ) {
          logout();
        }
      }

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

  const divStyle = {
    "width": "33%",
    "display": "flex",
  };

  return (
			<header className="App-header d-flex flex-row justify-content-around">

					<h1 style={divStyle} className="justify-content-center">Spotify-Trends</h1>

          <div style={divStyle} className="justify-content-end p-4">
              <div>
                <Button type="button" className="spotify-button" >
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    Login
                  </a>
                </Button>
              </div>
            </div>
			</header>
  );
}

export default App;