import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import css from './style.less'


const Collect = ({ CollectData, isShow, onShowCollect, onHideCollect, onClearAll }) => {
    const isEmpty = CollectData.length>0 ? false : true
    const boxinner = !isEmpty ?
                    (<ul 
                        style={{display: isShow ? 'block' : 'none'}}
                    >
                        {CollectData.map((sec, index) => 
                            <li 
                                key={index}
                            >
                            <a href={sec.url} target="_blank">{sec.name}</a>
                                
                            </li>
                        )}
                        <div className={css.clearbtn} onClick={() => onClearAll()}>清空收藏</div>
                    </ul>) :
                    (<div className={css.emtip} >尚未有收藏，点击卡片右上角 <strong>+</strong> 添加至收藏</div>)                 
    const box = isShow ? 
                (<div className={css.collectbox} onMouseLeave={() => onHideCollect()}>
                    {boxinner}
                </div>) : '';
    return (
        <div>
            <div className={css.collectbtn} onMouseEnter={()=> onShowCollect()}>我的收藏</div>
            <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={1000}>
                {box}
            </ReactCSSTransitionGroup>
        </div>
    )
}



Collect.propTypes = {
    CollectData: PropTypes.array.isRequired,
    isShow: PropTypes.bool.isRequired,
    onShowCollect: PropTypes.func.isRequired,
    onHideCollect: PropTypes.func.isRequired,
    onCollectClick: PropTypes.func.isRequired,
    onClearAll: PropTypes.func.isRequired
}

export default Collect