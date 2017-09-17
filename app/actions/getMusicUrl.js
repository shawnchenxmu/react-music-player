import axios from "axios";

export function getMusicUrl(musicId) {
  return function(dispatch) {
    axios.get(`http://halloween.wang:3000/music/url?id=${musicId}`,{
		Cookie: "appver=1.5.0.75771",
		Referer: "http://music.163.com/"})
    .then((response) => {
        dispatch({type: "PLAYING_MUSIC", payload: response.data.data[0].url});
      })
  }
}