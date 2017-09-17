import axios from "axios";

export function addToPlayHistory(id, name, artists, coverUrl) {
  return function(dispatch) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: [{id, name, artists, coverUrl}]
    })
  }
}