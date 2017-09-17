import React, { Component } from 'react';
import Menubar from './components/menubar'
import Recommend from './pages/recommend'
import Music from './pages/music'
import Search from './pages/search'
import DetailList from './pages/detaillist'
import User from './pages/user'
import store from './store'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'
import { connect } from "react-redux"
@connect((store) => {
  return {
    url: store.playingmusic.url
  };
})

class App extends Component{
	render(){
		return (
			<div>
			<Menubar />
			{ React.cloneElement(this.props.children, this.state) }
			</div>
		)
	}
}

class Root extends Component{
	render(){
		return (
			<Provider store={store}>
			 <Router history={ hashHistory }>
				<Route path="/" component={ App }>
					<IndexRoute component={ Music }></IndexRoute>
					<Route path="/recommend" component={ Recommend }></Route>
					<Route path="/user" component={ User }></Route>
					<Route path="/search" component={ Search }></Route>
					<Route path="/detaillist/:listId" component={ DetailList }></Route>
				</Route>
			</Router>
			</Provider>
		)
	}
}

export default Root;