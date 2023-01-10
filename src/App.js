import { useEffect } from 'react';
import './styles/App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getAccessToken } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getAccessToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist("37i9dQZEVXcNGJSqIYt8l3").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      });

    }

  }, []);

  return (
    <div className="app">
      {token ? (<Player spotify={spotify} />) : (<Login />)}
    </div>
  );
}

export default App;
