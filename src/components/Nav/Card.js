import React, { Component, PropTypes } from 'react'
import css from './card.less'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibleBack: false
        }
    }

    handleIntroVisible() {
        const vb = this.state.visibleBack;

        this.setState({
            visibleBack: !vb
        });
    }

    showAddTip() {
        const el = this.refs.addsign
        const tip = this.refs.addtip
        const [tx, ty] = [el.getBoundingClientRect().left, el.getBoundingClientRect().top ]
        tip.style.cssText='display:block;position:fixed;top: '+(ty)+'px;left: '+(tx+36)+'px'
    }

    hiedAddTip() {
        const tip = this.refs.addtip
        tip.style.display = 'none'
    }

    render() {
        const {  name, url, intro, isCollect, onAddCollect } = this.props
        const { visibleBack } = this.state

        let sign = isCollect ? '-' : '+' 

        return(
            <li
                onMouseEnter={this.handleIntroVisible.bind(this)}
                onMouseLeave={this.handleIntroVisible.bind(this)}
            >
                <a className={css.thumbnail} href={url} target="_blank" ref='thumbnail'>
                    <h3>{name}</h3>
                    <p className={css.intro} style={{ display: visibleBack ? 'block' : 'none' }}>{intro}</p>
                    <div className="back" style={{ display: visibleBack ? 'block' : 'none' }}>
                        <div 
                            ref="addsign"
                            className={css.add} 
                            onClick={(e) => {e.preventDefault();onAddCollect()}}
                            onMouseEnter={this.showAddTip.bind(this)}
                            onMouseLeave={this.hiedAddTip.bind(this)}
                        >
                            {sign}
                        </div>                        
                    </div>
                </a>
                <div className={css.addtip} ref="addtip" style={{display:'none'}}>
                    {isCollect ? '从收藏中移除' : '添加至收藏'}
                </div>
            </li> 
        )
        
    }
}



Card.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    isCollect: PropTypes.bool.isRequired,
    onAddCollect: PropTypes.func.isRequired
}



export default Card
