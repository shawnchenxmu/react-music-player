import axios from "axios";

export function getLyrics(id) {
  return function(dispatch) {
  	axios.get(`http://halloween.wang:3000/lyric?id=${id}`)
      .then((response) => {
        var lyric = response.data.lrc.lyric
        dispatch({type: "FETCH_LYRICS", payload: lyric});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DETAIL_REJECTED", payload: err})
      })
  }
}