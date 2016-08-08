import { connect } from 'react-redux'

import Collect from './../components/Collect/Collect.js'


const coll = (state) => {
    let arr = []
    state.cards.forEach((item) => {
        item.list.forEach((card) => {
            if (card.isCollect ) {
                arr.push(card)
            }
        })
    })
    return arr
}


const mapStateToProps = (state) => {
    return {
        CollectData: coll(state),
        isShow: state.collect_info.isShow

    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onShowCollect: () => {
			dispatch({type: 'SHOW_COLLECT_BOX'})
		},
        onHideCollect: () => {
            dispatch({type: 'HIDE_COLLECT_BOX'})
        },
        onClearAll: () => {
            dispatch({type: 'CLEAR_COLLECT_BOX'})
        }
    }
}

const CollectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Collect)

export default CollectContainer;