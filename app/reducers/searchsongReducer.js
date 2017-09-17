export default function reducer(state={
    result: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case "SEARCH_SONG": {
        return Object.assign({}, state, {fetching: true})
      }
      case "SEARCH_SONG_REJECTED": {
        return Object.assign({}, state, {fetching: false, error: action.payload})
      }
      case "SEARCH_SONG_FULFILLED": {
        return Object.assign({},
          state,{
          fetching: false,
          fetched: true,
          result: action.payload,
        }
      )}
    }

    return state
}
