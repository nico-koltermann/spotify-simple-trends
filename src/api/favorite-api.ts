import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

export const GetTopTracks =
  async (limit: number, time: string, offset: number): Promise<any> => {
    return axios
      .get(`${BASE_URL}/me/top/tracks?time_range=${time}&limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
      })
      .then((response) => console.log(response.data));
  };

export const GetTopArtists =
  async (limit: number, time: string, offset: number): Promise<any> => {
    return axios
      .get(`${BASE_URL}/me/top/artists?time_range=${time}&limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
      })
      .then((response) => console.log(response.data));
  };


