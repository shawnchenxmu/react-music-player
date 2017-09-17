export default function reducer(state={
    songlists: [],
    detaillist: [],
    songname: [],
    listId: null,
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case "FETCH_SONGLIST": {
        return Object.assign({}, state, {fetching: true})
      }
      case "FETCH_SONGLIST_REJECTED": {
        return Object.assign({}, state, {fetching: false, error: action.payload})
      }
      case "FETCH_SONGLIST_FULFILLED": {
        return Object.assign({},
          state,{
          fetching: false,
          fetched: true,
          songlists: action.payload,
        }
      )}
      case "GET_DETAILLIST": {
        return Object.assign({}, state, {fetching: true})
      }
      case "GET_SONG_NAME": {
        return Object.assign({}, state, {
          fetching: false,
          fetched: true,
          songname: action.payload})
      }
      case "SHOW_DETAILLIST": {
        return Object.assign({},
          state,{
          fetching: false,
          fetched: true,
          detaillist: action.payload
          })
      }
    }

    return state
}
