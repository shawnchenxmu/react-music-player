import React, { Component } from 'react'
import './display.less'
import { connect } from "react-redux"
import { playingMusic } from '../actions/playingMusic'
import SongItem from '../components/songitem'
import { addToPlayHistory } from '../actions/addToPlayHistory'

@connect((store) => {
  return {
  	history: store.user.history
  };
})

class User extends Component{
	playingMusic(id, name, artists, coverUrl){
		this.props.dispatch(playingMusic(id, name, artists, coverUrl))
		const player = document.getElementById("player")
		player.setAttribute('src', `//music.163.com/outchain/player?type=2&auto=1&height=66&id=${id}`)
	}

	render() {
		const { history } = this.props
		const historyMap = history.map(
			(song, index) =>
			<SongItem
			className="col-sm-12"
			key={index} name={song.name}
			coverUrl={song.coverUrl}
			artist={song.artists}
			handler={this.playingMusic.bind
				(this, song.id, song.name, song.artists, song.coverUrl)
			}
			/>
		)

		return (
			<div className="display">
				{ historyMap }
			</div>
		)
	}
}

export default User