import React from 'react'
import { Link } from 'gatsby'
import style from './Card.module.css'

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
            className={style.cardContain}
            >
            <div className={style.title}>{title}</div>
            <div className={style.desc}>
                {description}
                <p><i>{language === 'French' ? period[0] : period[1]}</i></p>
            </div>
            <div className={style.portSkills}>
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
            <div className={style.links} to={link}>Find Out More</div>
        </Link>
    )
}

export default Card