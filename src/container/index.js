import React from 'react';
// import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from '../store'

import NavContainer from'./NavContainer'
import CollectContainer from'./CollectContainer'
import Profile from './../components/Profile/Profile.js'
import MenuContainer from './MenuContainer.js'

import '../styles/animation.less'
import '../styles/reset.css'


const App = (
	<Provider store={ store }>
		<div>
			<NavContainer />
			<CollectContainer />
			<Profile />
			<MenuContainer />
		</div>
	</Provider>
)



export default App