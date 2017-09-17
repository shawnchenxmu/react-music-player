import React, { Component } from 'react'
import { connect } from "react-redux"
import { getLyrics } from '../actions/getLyrics'
import './display.less'
@connect((store) => {
  return {
    coverUrl: store.playingmusic.coverUrl,
    name: store.playingmusic.name,
    artists: store.playingmusic.artists,
    musicId: store.playingmusic.musicId,
    lyrics: store.playingmusic.lyrics
  };
})

class Music extends Component{
	componentWillMount(){
		this.props.dispatch(getLyrics(this.props.musicId));
	}
	render() {
		const lyrics = this.props.lyrics
		if(lyrics){var newStr=lyrics.replace(/\[.*\]/g, "")}
		return (
			<div className="display">
			<pre className="lyrics">
			{ newStr }
			</pre>
			<img src={this.props.coverUrl} className="img-thumbnail cover" alt="cover"/>
			<h2 className="songname">{this.props.name}</h2>
			<h4 className="artists">{this.props.artists}</h4>
			</div>
		)
	}
}

export default Music