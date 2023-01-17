import React from 'react';
import s from './buttons.module.css'

type buttonsPropsType={
    changeCount:()=>void
    cleanDisplay:()=>void
    disable: boolean
    disableReset: boolean

}
export const Buttons = (props:buttonsPropsType) =>{
    const disableInc = props.disable ? s.btnIncDis : s.btnInc
    const disableReset=props.disableReset ? s.btnResetDis : s.btnReset
    return(
        <div className={s.btnBlock}>
            <button onClick={props.changeCount}
                    className={disableInc}
                    disabled={props.disable}>inc</button>
            <button onClick={props.cleanDisplay}
                    className={disableReset}
                    disabled={props.disableReset}>reset</button>
        </div>
    )
}