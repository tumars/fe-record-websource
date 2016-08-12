import { connect } from 'react-redux'

import Menu from './../components/Menu/Menu.js'
import slimScroller from './slimScroller.full.min.js'


const mapStateToProps = (state) => {
    return {
        MenuData: state.menu_info
    }
}

const mapDispatchToProps = () => {
	return {
		onMenuClick: (sec) => {
            slimScroller.scroll(sec.overhead)
		}
	}
}

const MenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu)

export default MenuContainer;