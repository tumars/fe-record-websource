import React, { Component } from 'react'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import css from './style.less'


class Profile extends Component {
	constructor(props) {
		super(props)

        this.state = {
            visible: false
        }
	}

	onShowProfile(){
		this.setState({
			visible: true
		})
	}

	onHideProfile(){
		this.setState({
			visible: false
		})
	}

	render() {
	// const { onShowProfile, onHideProfile } = this.props
	const { visible } = this.state

	const InnerContent = (
			<div>
				<div className={css.boxinner}>
					<ul className={css.list}>
							<li>
								<div>Twitter:</div>
								<div><a href="https://twitter.com/Tumars" target="_blank">@Tumars</a></div>
							</li>
							<li>
								<div>GitHub:</div>
								<div><a href="https://github.com/tumars" target="_blank">github.com/tumars</a></div>
							</li>
							<li>
								<div>Email:</div>
								<div>menghui9898@gmail.com</div>
							</li>
							<li>
								<div>Blog:</div>
								<div><a href="http://www.ferecord.com/" target="_blank">www.ferecord.com</a></div>
							</li>
							<li>
								<div>微信公众号:</div>
								<div>前端记录</div>
							</li>
					</ul>
					<div className={css.bear}></div>
				</div>
			</div>
		)
	return (
		<div className={css.bottom}>
			<div className={css.Profilebtn} onClick={this.onShowProfile.bind(this)}>作者信息</div>
			<a href="https://github.com/tumars/fe-record" className={css.git} target="_blank">访问 GitHub</a>
			<ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={1000}>
				{visible ? <div className={css.mask} onClick={this.onHideProfile.bind(this)}></div>: ''}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup className={css.box} transitionName="flipX" transitionAppear={true} transitionAppearTimeout={1000}>
				{visible ? InnerContent : ''}
			</ReactCSSTransitionGroup>
		</div>
	)
	}
}



export default Profile