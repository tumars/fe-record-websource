import React, { PropTypes } from 'react'
import Card from './Card'

const CardList = ({title, list, onAddCollect}) =>(
    <div>
        <h2>{title}</h2>
        <ul>
            {list.map((card, index) =>
             <Card
                {...card}
                key={index}
                onAddCollect={() => onAddCollect(card)}
             />)}
        </ul>
    </div>
)


CardList.propTypes = {
    title:PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        isCollect: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onAddCollect: PropTypes.func.isRequired
}

CardList.defaultProps = {
    title: 'none',
    list: [{
        name: 'none',
        url: 'none',
        intro: 'none',
        isCollect: false
    }],
    onAddCollect: () => {
        alert('error')
    }
} 

export default CardList
