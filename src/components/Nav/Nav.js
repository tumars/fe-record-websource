import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'


import Cardlist from './Cardlist'
import css from './card.less'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const tarArr = this.refs.ListContainer.childNodes

        const MenuInfo = [];

        for (var i = 0; i < tarArr.length; i++) {
            const mm = {
                name: tarArr[i].firstElementChild.innerHTML,
                overhead: tarArr[i].offsetTop==0 ? 1 : tarArr[i].offsetTop
            }
            MenuInfo.push(mm)
        }

        this.props.initMenuData(MenuInfo)
    }

    render() {
        const { Navdata, onAddCollect } = this.props        
        return(
            <div className={css.container}>
                <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={1000}>
                    <div ref="ListContainer"  className={css.lists}>
                        {Navdata.map((cardListData, index) => 
                            <Cardlist 
                                key={index}
                                {...cardListData}
                                onAddCollect= {(card) => onAddCollect(card)}
                            />
                        )}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}



Nav.propTypes = {
    Navdata: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            list: PropTypes.array.isRequired
        }).isRequired).isRequired,
    initMenuData: PropTypes.func.isRequired,
    onAddCollect: PropTypes.func.isRequired
}

export default Nav