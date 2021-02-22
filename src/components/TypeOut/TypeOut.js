import React, { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint'

const TypeOut = ({words}) => {
    const [begin, setBegin] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (begin && current < words.length) {
            const update = () => {
                setCurrent(current + 1)
            }
            const timer = setTimeout(update, 40);
            return () => clearTimeout(timer)
        }
    })
    return (
        <Waypoint onEnter={() => setBegin(true)}>
            <span>{words.substring(0, current)}{current < words.length && '|'}</span>
        </Waypoint>
    )
}

export default TypeOut