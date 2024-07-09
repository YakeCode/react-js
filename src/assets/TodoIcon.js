import React from 'react'
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './Delete.svg';
import '../styles/TodoIcon.css'

const icontTypes = {
    "check": (color)=> <CheckSVG  className="icon-svg-check" fill={color}/>,

    "delete": (color)=> <DeleteSVG className="icon-svg-delete" fill={color}/>
}

function TodoIcon({type,color,onClick}) {
    return (
        <span 
            className=
            {`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {icontTypes[type](color)}
                    
        </span>
    )
}

export {TodoIcon}