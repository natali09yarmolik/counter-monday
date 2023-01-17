import React from 'react';
import s from './display.module.css'

type displayPropsType={
    count: number
    num:number
}

export const Display=(props:displayPropsType)=>{

    const classMax = props.num === 5 ? s.displayBlockMax : s.displayBlock
    return (<div className={classMax}>
            <div>{props.count}</div>
            </div>
    )
}