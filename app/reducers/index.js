import { combineReducers } from "redux"

import songlist from "./songlistReducer"
import searchsong from "./searchsongReducer"
import playingmusic from "./playingmusicReducer"
import user from "./userReducer"

export default combineReducers({
	songlist,
	searchsong,
	playingmusic,
	user
})
