import axios from "axios";

export function getSongName(songId[0]) {
  return function(dispatch) {
    axios.get(`http://halloween.wang:3000/song/detail?ids=${songId[0]}`,{
Cookie: "appver=1.5.0.75771",
Referer: "http://music.163.com/"})
      .then((response) => {
        dispatch({type: "GET_SONG_NAME", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SONGLIST_REJECTED", payload: err})
      })
  }
}