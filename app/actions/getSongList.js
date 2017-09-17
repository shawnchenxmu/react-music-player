import axios from "axios";

export function getSongList() {
  return function(dispatch) {
    dispatch({type: "FETCH_SONGLIST"});
    axios.get("http://halloween.wang:3000/top/playlist/highquality?limit=30",{
Cookie: "appver=1.5.0.75771",
Referer: "http://music.163.com/"})
      .then((response) => {
        dispatch({type: "FETCH_SONGLIST_FULFILLED", payload: response.data.playlists})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SONGLIST_REJECTED", payload: err})
      })
  }
}