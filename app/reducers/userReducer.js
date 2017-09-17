export default function reducer(state={
    history: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case "ADD_TO_HISTORY": {
        return Object.assign({}, state, {
        history: state.history.concat(action.payload)
      });
      }
      case "GET_HISTORT_REJECTED": {
        return Object.assign({}, state, {
          fetching: false, error: action.payload
        })
      }
    }

    return state
}
