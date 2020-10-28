import React, { useState, useEffect, useRef } from 'react'
import './Headline.css'

const Headline = () => {
    const words = ['Web', 'PWA', 'React', 'Nomad']
    let countRef = useRef(0);
    let wordRef = useRef(0);
    const [count, setCount] = useState(0);
    const [toBeTyped, setToBeTyped] = useState(words[wordRef.current])

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordRef.current === words.length) {
                clearInterval(interval)
            } else if (countRef.current === toBeTyped.length + 4 && wordRef.current < words.length - 1) {
                wordRef.current += 1
                countRef.current = 0
                setToBeTyped(words[wordRef.current])
                setCount(0)
            } else {
                countRef.current += 1;
                setCount(countRef.current)
            }

        }, 600);
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            {toBeTyped.substr(0, count)} Developer
        </div>
    )
}

export default Headline