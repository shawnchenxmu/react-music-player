import React, { Component } from 'react'
import { Link } from 'react-router'
import './menubar.less'

class Menubar extends Component{
	render() {
		return (
			<div className="component-menubar">
				<Link to="/recommend"><span className="item">
				<i className ="fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
				</span></Link>
				<Link to="/"><span className="item">
				<i className="fa fa-music fa-2x" aria-hidden="true"></i>
				</span></Link>
				<Link to="/user"><span className="item">
				<i className="fa fa-user fa-2x" aria-hidden="true"></i>
				</span></Link>
				<Link to="/search"><span className="item">
				<i className="fa fa-search fa-2x" aria-hidden="true"></i>
				</span></Link>
			</div>
		);
	}
}

export default Menubar;