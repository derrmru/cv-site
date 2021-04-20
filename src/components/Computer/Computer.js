import React, {useEffect, useState, useRef} from "react"
import {
    outline,
    screen,
    stand,
    keyboard,
    keys,
    keysTwo
} from "./Computer.module.css"

export default function Computer(){
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    let toBeTyped = useRef(''); //page slug

    useEffect(() => { // Type slug into icon
        toBeTyped.current = window.location.pathname + "...";
        const interval = setInterval(() => {
            countRef.current += 1;
            setCount(countRef.current)
            //console.log("ref = " + countRef.current)
            if (countRef.current === toBeTyped.length) {
                clearInterval(interval)
            }
        }, 400);
        return () => clearInterval(interval);
      }, [toBeTyped]);

    return (
        <>
            <div className={outline}></div>
            <div className={screen}>./{toBeTyped.current.substr(1, count)}</div>
            <div className={stand}></div>
            <div className={keyboard}>
                <div className={keys}></div>
                <div className={keysTwo}></div>
            </div>
        </>
    )
}