import { connect } from 'react-redux'

import Nav from './../components/Nav/Nav.js'

const mapStateToProps = (state) => {
  return {
    Navdata: state.cards,
    Menudata: state.cards.map((cardListData) => {
                return cardListData.title
            })
  }
}


const mapDispatchToProps = (dispatch) => {
	return {
		onAddCollect: (card) => {
            dispatch({type:'TOOGLE_COLLECT',item: card.name})
		},
        initMenuData: (data) => {
            dispatch({type:'INIT_MENU', data: data})
        }
    }
}


const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default NavContainer;