import axios from "axios";

export function searchSong(songName) {
  return function(dispatch) {
    dispatch({type: "SEARCH_SONG"});
    axios.get(`http://halloween.wang:3000/search?keywords=${songName}?offset=30`,{
Cookie: "appver=1.5.0.75771",
Referer: "http://music.163.com/"})
      .then((response) => {
        dispatch({type: "SEARCH_SONG_FULFILLED", payload: response.data.result.songs})
        dispatch({type: "GET_SONG_NAME"})
      })
      .catch((err) => {
        dispatch({type: "SEARCH_SONG_REJECTED", payload: err})
      })
  }
}