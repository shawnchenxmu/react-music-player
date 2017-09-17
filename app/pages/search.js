import React, { Component } from 'react'
import { Link } from 'react-router'
import { searchSong } from '../actions/searchSong'
import { connect } from "react-redux"
import SongItem from '../components/songitem'
import { playingMusic } from '../actions/playingMusic'
import { addToPlayHistory } from '../actions/addToPlayHistory'
import './display.less'

@connect((store) => {
  return {
  	result: store.searchsong.result
  };
})

class Search extends Component{
	handleSubmit(e){
		e.preventDefault();
		const songName = this.refs.songName.value
		this.props.dispatch(searchSong(songName))
	}

	playingMusic(id, name, artists, coverUrl){
		this.props.dispatch(addToPlayHistory(id, name, artists, coverUrl))
		this.props.dispatch(playingMusic(id, name, artists, coverUrl))
		const player = document.getElementById("player")
		player.setAttribute('src', `//music.163.com/outchain/player?type=2&auto=1&height=66&id=${id}`)
	}

	searchSong(songName){
		this.props.dispatch(searchSong(songName))
	}

	render() {
		const { result } = this.props

		const resultMap = result.map(
			(song, index) =>
			<SongItem
			className="col-sm-12"
			key={index} name={song.name}
			coverUrl={song.album.picUrl}
			artist={song.artists[0].name}
			handler={this.playingMusic.bind
				(this, song.id, song.name, song.artists[0].name, song.album.picUrl)
			}/>
			)

		return (
			<div className="display">
			<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
			<input type="text" ref="songName" placeholder="search" className="col-sm-12"/>
			</form>
			<div className="searchResult">
			{ resultMap.length > 0 &&
			resultMap
		}
			</div>
			</div>
		)
	}
}

export default Search