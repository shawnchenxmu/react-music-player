import React, { Component } from 'react'
import { connect } from "react-redux"
import { getDetailList } from '../actions/getDetailList'
import { Link } from 'react-router'
import SongItem from '../components/songitem'
import { playingMusic } from '../actions/playingMusic'
import { addToPlayHistory } from '../actions/addToPlayHistory'
import './display.less'

@connect((store) => {
  return {
  	detaillist: store.songlist.detaillist,
  };
})


class DetailList extends Component{
	componentDidMount(){
		const  {listId} = this.props.params
		this.props.dispatch(getDetailList(listId))
	}
	playingMusic (id, name, artists, coverUrl) {
		this.props.dispatch(addToPlayHistory(id, name, artists, coverUrl))
		this.props.dispatch(playingMusic(id, name, artists, coverUrl))
		const player = document.getElementById("player")
		player.setAttribute('src', `//music.163.com/outchain/player?type=2&auto=1&height=66&id=${id}`)
	}
	getDetailList(listId) {
    	this.props.dispatch(getDetailList(listId))
  	}

	render() {
		const { detaillist } = this.props
		const songId = detaillist.map(
			(song, index) =>
			<SongItem
			className="col-sm-12"
			key={index}
			coverUrl={song.album.picUrl}
			name={song.name}
			artist={song.artists[0].name}
			handler={this.playingMusic.bind
				(this, song.id, song.name, song.artists[0].name, song.album.picUrl)
			}/>)
		return (
			<div className="display">
			{songId}
			</div>
		)
	}
}

export default DetailList