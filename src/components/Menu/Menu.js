import React, { PropTypes } from 'react'

import css from './menu.less'

const Menu = ({ MenuData, onMenuClick }) =>(
    <div className={css.menu}>
        <ul>
        {MenuData.map((sec, index) => 
                <li 
                    onClick={()=> onMenuClick(sec)}
                    key={index}
                >
                    {sec.name}
                </li>
            )}
        </ul>
    </div>
)


Menu.propTypes = {
    MenuData: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func.isRequired
}

Menu.defaultProps = {
    MenuData: [{name:'cc', overhead:1}],
    onMenuClick: function () {
    }
} 

export default Menu
