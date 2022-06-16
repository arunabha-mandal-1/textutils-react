import React from 'react'
// import { useState } from 'react'
import './Diffmode.css'

export default function Diffmode(props) {
    // const [bg, setbg] = useState(null);
    // const [nav, setnav] = useState(null);

    const changeBlue = ()=>{
        document.body.style.backgroundColor = 'rgb(7, 7, 117)';
        document.body.style.color = 'white';
    }
    const changeGray = ()=>{
        document.body.style.backgroundColor = 'rgb(75, 74, 74)';
        document.body.style.color = 'white';
    }
    const changePurple = ()=>{
        document.body.style.backgroundColor = 'rgb(88, 8, 88)';
        document.body.style.color = 'white';
    }
    return (
        <div className="btn-group mx-1 right" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn blue" onClick={changeBlue}>Blue</button>
            <button type="button" className="btn grey" onClick={changeGray}>Grey</button>
            <button type="button" className="btn purple" onClick={changePurple}>Purple</button>
        </div>
    )
}
