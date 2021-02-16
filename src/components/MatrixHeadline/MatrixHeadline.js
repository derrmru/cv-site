import React, { useState, useEffect, useRef } from 'react'

const MatrixHeadline = (props) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const words = ['Web', 'Software', 'React', 'Nomad', 'PWA', 'Javascript', 'Full Stack'];
    const [reset, setReset] = useState(words[0]);
    const show = useRef('');
    const word = useRef(words[0]);

    useEffect(() => {
        if (show.current === '') {
            show.current = word.current.split('').reduce((total, cur) => {
                return total += alphabet[Math.floor(Math.random() * 10)]
            }, '')
        }
        const letters = show.current.split('');
        const interval = setInterval(() => {
            show.current = letters.reduce((total, cur, idx) => {
                if (cur.toLowerCase() === word.current[idx].toLowerCase()) {
                    return total += word.current[idx]
                }
                return total += alphabet[Math.floor(Math.random() * Math.max(alphabet.length))]
            }, '')
            setReset(show.current)
        }, 30);
        //console.log(show.current)
        return () => clearInterval(interval);
    }, [reset])

    return (
        <div className="headline-container">
            <div className="keep-height">
                {reset}
            </div>
            <div>{props.language === 'French' ? 'Développeur' : 'Developer'}</div>
        </div>
    )
}

export default MatrixHeadline