import axios from "axios";

export function getDetailList(listId) {
  return function(dispatch) {
    dispatch({type: "GET_DETAILLIST"});
    axios.get(`http://music.163.com/api/playlist/detail?id=${listId}`,{
Cookie: "appver=1.5.0.75771",
Referer: "http://music.163.com/"})
      .then((response) => {
        dispatch({type: "SHOW_DETAILLIST", payload: response.data.result.tracks})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SONGLIST_REJECTED", payload: err})
      })
  }
}