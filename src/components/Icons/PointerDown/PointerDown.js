import React, { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint'
import style from './PointerDown.module.css'

const PointerDown = () => {
    const [start, setStart] = useState(false);
    const [begin, setBegin] = useState(false);

    useEffect(() => {
        if (start && !begin) {
            const go = () => setBegin(true)
            const timer = setTimeout(go, 1000);
            return () => clearTimeout(timer)
        }
    })

    return (
        <Waypoint onEnter={() => setStart(true)}>
            <div style={{width: '100%', height: '100px', textAlign: 'center'}}>
            {
                (start && begin) && <svg style={{width: '100px', height: '100px'}} viewbox="0 0 50 100" stroke-width="1">
                    <path className={style.down} d="M 50 50 L 50 100" fill='transparent' stroke='black'/>
                    <path className={style.arrow} d="M 35 85 L 50 100 L 65 85" fill='transparent' stroke='black'/>
                </svg>
            }
            </div>
        </Waypoint>
    )
}

export default PointerDown