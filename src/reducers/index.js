import { combineReducers } from 'redux'
import NAV_DATA from './data'

if(localStorage.LocalCollectData){
    const LocData = localStorage.LocalCollectData.split(',')
    NAV_DATA.map((item) => {
        item.list.map((card) => {
            LocData.map((name) => {
                if(card.name == name){
                    card.isCollect = true
                }
            })
        })
    })
}

const initalHelloState = {
  HELLO_TEXT: 'Hi, World!'
}
const changeText = (state = initalHelloState, action) => {
    switch (action.type) {
        case 'sayHi':
            {
                if (state.HELLO_TEXT != action.text ) return { HELLO_TEXT: action.text }
                return initalHelloState;
            }

        default:
            return state
    }
}



const cards = (state = NAV_DATA, action) => {
    switch (action.type) {
        case 'TOOGLE_COLLECT':
        {
            let newS = state;
            newS.map((item) => {
                item.list.map((card) => {
                    if(action.item == card.name) {
                        card.isCollect = !card.isCollect;

                        if(!localStorage.LocalCollectData){localStorage.setItem('LocalCollectData','')}
                        const LocData = localStorage.LocalCollectData.split(',')
                        
                        if (card.isCollect == false) {
                            const ind = LocData.indexOf(card.name)
                            const NewlocaData = LocData.slice(0, ind).concat(LocData.slice(ind+1))

                            localStorage.removeItem('LocalCollectData') 
                            localStorage.setItem('LocalCollectData', NewlocaData)
                        } else {
                            LocData.push(card.name)
                            localStorage.setItem('LocalCollectData', LocData)
                        }
                    }
                })
            })
            return [].concat(newS)
        }
        case 'CLEAR_COLLECT_BOX':
        {
            localStorage.removeItem('LocalCollectData') 
            let newS = state;
            newS.map((item) => {
                item.list.map((card) => {
                    card.isCollect = false;
                })
            })
            return [].concat(newS)
        }
        default: 
            return state
    }
}



const collect_info = (state = {isShow: false}, action) => {
    switch (action.type) {
        case 'SHOW_COLLECT_BOX':
            return Object.assign({}, state, {isShow: true})
        case 'HIDE_COLLECT_BOX':
            return Object.assign({}, state, {isShow: false})
        default:
            return state
    }
}


const menu_info = (state = [], action) => {
    switch (action.type) {
        case 'INIT_MENU':
            return Object.assign([], state, action.data)
        default:
            return state
    }
}


export default combineReducers({
    changeText,
    cards,
    collect_info,
    menu_info
})