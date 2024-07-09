import React from 'react'
import {TodoIcon} from '../assets/TodoIcon'

function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcon
            type="check"
            color={completed ? '#00ff8888' : 'gray'}
            onClick={onComplete}
        />
    )
}

export {CompleteIcon}