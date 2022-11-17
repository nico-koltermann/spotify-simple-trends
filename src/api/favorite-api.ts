import Cookies from 'universal-cookie';
import axios from 'axios';
import qs from 'qs';

import { Favorite } from "../data/favorite"

const BASE_URL = 'https://api.spotify.com/v1';
const cookies = new Cookies();

const getAuthorizationToken = async (): Promise<void> => {
  await axios
    .post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    .then((response) => {
      cookies.set('auth', response.data.access_token, {
        maxAge: response.data.expires_in,
      });
    });
};

const getAuth = async (): Promise<string> => {
  let auth: string = cookies.get('auth');
  if (auth === undefined) {
    await getAuthorizationToken();
    auth = cookies.get('auth');
  }

  return auth;
};

export const GetFeaturedPlaylists =
  async (): Promise<any> => {
    const auth = await getAuth();
    return axios
      .get(`${BASE_URL}/browse/featured-playlists`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((response) => response.data);
  };


export function getFavorites(): Favorite {
  return { artist: "test" };
}