import React, { Component } from 'react'
import { Link } from 'react-router'
import './songitem.less'

class SongItem extends Component{
	render() {
		return (
			<div className="component-songitem">
			<h3>
			<img src={this.props.coverUrl} className="coversmall" alt="cover"/>
			<a onClick={this.props.handler}>{this.props.name}</a><small>{this.props.artist}</small></h3>
			</div>
		);
	}
}

export default SongItem;