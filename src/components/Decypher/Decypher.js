import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Waypoint } from 'react-waypoint'

const MatrixHeader = ({words}) => {
    const [begin, setBegin] = useState(false);
    const alphabet = ' abcdefghijklmnopqrstuvwxyz0123456789!&-#.*:;<>'
    const randomLetter = () => alphabet[Math.ceil(Math.random() * (alphabet.length - 10))];
    const gen = useRef('')
    const cur = useRef(0);
    const [count, setCount] = useState(0);

    const randomWord = useCallback(
        (base) => {
            return base.split('').reduce((newWord) => {
                return newWord += randomLetter()
            })
        }, [])

    //on initial load, setGen to random letters of first word in 'words' prop
    useEffect(() => {
        if (gen.current === '') gen.current = randomWord(words[0])
    }, [gen, words, randomWord])

    useEffect(() => {
        if (begin) {
            //word manipulation function
            const start = () => {
                //increment count for next run
                setCount(count + 1)
                //if gen is already resolved, return gen
                if (gen.current === words[cur.current]) return gen.current
                //otherwise get letters to manipulate
                const letters = gen.current.split('');
                //reduce letters to new random word, keeping
                const newWord = letters.reduce((word, letter, idx) => {
                    if (letter === words[cur.current][idx].toLowerCase() || words[cur.current][idx] === ' ') {
                        return word += words[cur.current][idx]
                    } else {
                        return word += randomLetter()
                    }
                }, '')
                gen.current = newWord
            }

            if (cur.current !== words.length) {
                if (count === 20) {
                    gen.current = words[cur.current]
                } else if (count === 100) {
                    cur.current += 1
                    gen.current = words[cur.current] ? randomWord(words[cur.current]) : words[words.length - 1]
                    setCount(0)
                } 
                const timer = setTimeout(start, 20)
                return () => clearTimeout(timer)
            }
        }
    }, [begin, words, count, randomWord])

    return (
        <Waypoint onEnter={() => setBegin(true)}>
            <span>{gen.current}</span>
        </Waypoint>
    )
}

export default MatrixHeader