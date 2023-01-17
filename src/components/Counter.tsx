import React, {useState} from 'react';
import {Display} from "./Display";
import {Buttons} from "./Buttons";
import s from './counter.module.css'


export const Counter=()=>{
    const [num, setNum]=useState<number>(0)
    const [disable, setDisable]=useState<boolean>(false)
    const [disableReset, setDisableReset] = useState(true)
    const MAX_VALUE = 5
    const lastStep = MAX_VALUE - 1
    const changeCount = () => {

        if (num < lastStep) {
            setNum(num + 1)
            setDisableReset(false)
            return;
        }
         if (num === lastStep) {
            setNum(num + 1)
            setDisable(true)
        }
    }
    const cleanDisplay =()=>
    {
        setNum(0)
        setDisableReset(true)
        setDisable(false)
    }

    return(
        <div className={s.counterBlock}>
            <Display count={num}
                     num={num}/>
            <Buttons changeCount={changeCount}
                     cleanDisplay={cleanDisplay}
                     disable={disable}
                     disableReset={disableReset}/>
        </div>
    )
}