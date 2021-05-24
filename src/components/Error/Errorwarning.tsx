import React from 'react'
import { ErrorStyle } from "./ErrorWarning.style";
const Errorwarning = ({...props}) => {
    const { root } = ErrorStyle();
    return (
        <div className={root}>
            {props.message}
        </div>
    )
}

export default Errorwarning
