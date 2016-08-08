import React, { PropTypes } from 'react'

const Menu = ({ MenuData, onMenuClick }) =>(
    <div>
        <ul>
        {MenuData.map((sec, index) => 
                <li 
                    onClick={()=> onMenuClick(index)}
                    key={index}
                >
                    {sec}
                </li>
            )}
        </ul>
    </div>
)


Menu.propTypes = {
    MenuData: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func.isRequired
}

export default Menu
