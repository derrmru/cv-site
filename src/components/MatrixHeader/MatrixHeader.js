import React from 'react'
import Decypher from '../Decypher/Decypher'

const MatrixHeader = ({language, words}) => {

    return (
        <div className="headline-container">
            <div className="keep-height">
                <Decypher words={words} />
            </div>
            <div>{language === 'French' ? 'Développeur' : 'Developer'}</div>
        </div>
    )
}

export default MatrixHeader