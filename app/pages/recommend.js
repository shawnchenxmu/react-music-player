import React, { Component } from 'react'
import { Link } from 'react-router'
import './display.less'
import { connect } from "react-redux"

import { getSongList } from "../actions/getSongList"

@connect((store) => {
  return {
    songlists: store.songlist.songlists,
  };
})

class Recommend extends Component{
 componentDidMount() {
    this.props.dispatch(getSongList())
  }

  getSongList() {
    this.props.dispatch(getSongList())
  }

  render() {
    const { songlists } = this.props;

    const mappedTweets = songlists.map(
    	(songlist, index) =>
    	<div className="col-sm-3 listCover" key={index}>
    	<img className="img-responsive"src={ songlist.coverImgUrl }/>
    	<Link to={'/detaillist/'+songlist.id}><p className="text-center">{songlist.name}</p></Link>
    	</div>)

    return <div className="display">
      {mappedTweets}
    </div>
  }
}

export default Recommend