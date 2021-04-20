import React from 'react'
import { Link } from 'gatsby'
import {
    cardContain,
    tit,
    desc,
    portSkills,
    links
} from './Card.module.css'

const Card = ({
    title,
    link,
    description,
    language,
    period,
    specialisms
}) => {
    return (
        <Link 
            to={link}
            className={cardContain}
            >
            <div className={tit}>{title}</div>
            <div className={desc}>
                {description}
                <p><i>{language === 'French' ? period[0] : period[1]}</i></p>
            </div>
            <div className={portSkills}>
                <p><strong>Skillset</strong></p>
                <ul>
                    {specialisms.map((skill, i) => {
                        return <li
                            key={'skill' + i}
                            >
                                {skill}
                            </li>
                    })}
                </ul>
            </div>
            <div className={links} to={link}>Find Out More</div>
        </Link>
    )
}

export default Card