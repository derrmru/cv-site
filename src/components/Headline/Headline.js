import React, { useState, useEffect, useRef } from 'react'

const Headline = (props) => {
    const words = ['Web', 'Software', 'React', 'Nomad', 'PWA', 'Javascript', 'Full Stack']
    let countRef = useRef(0);
    let wordRef = useRef(0);
    const [count, setCount] = useState(0);
    const [toBeTyped, setToBeTyped] = useState(words[wordRef.current])

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordRef.current === words.length) {
                clearInterval(interval)
            } else if (countRef.current === toBeTyped.length + 6 && wordRef.current < words.length - 1) {
                wordRef.current += 1
                countRef.current = 0
                setToBeTyped(words[wordRef.current])
                setCount(0)
            } else {
                countRef.current += 1;
                setCount(countRef.current)
            }

        }, 400);
        return () => clearInterval(interval);
      }, [toBeTyped.length, words]);

    return (
        <div className="headline-container">
            <div className="keep-height">
                {toBeTyped.substr(0, count)}
                <span style={count > words[wordRef.current].length && count % 2 === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}>|</span>
            </div>
            <div>{props.language === 'French' ? 'Développeur' : 'Developer'}</div>
        </div>
    )
}

export default Headline