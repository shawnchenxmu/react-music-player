import axios from "axios";

export function playingMusic(musicId, name, artists, coverUrl) {
  return function(dispatch) {
    dispatch({type: "PLAYING_MUSIC", payload:{musicId, name, artists, coverUrl}});
  }
}