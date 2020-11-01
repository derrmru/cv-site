import React from 'react'
import styles from './AvailableTimes.module.css'

const AvailableTimes = (props) => {
    let times;
    props.availableTimes !== undefined ? times = props.availableTimes.freeslots : times = undefined;

    return (
        <>
            {
                props.loadingTimes ? 
                    <>Loading...</> :
                    <div id="atBox" className={styles.availableTimesContainer}>
                        <div className={styles.atBanner}>
                            <h2>Available Times</h2>
                            { 
                                times !== undefined ? 
                                    <p>You have selected {new Date(times[0].split(',')[0]).toDateString()}</p> :
                                        <p>Please select a date</p>
                            }
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.timesContainer}>
                            {
                                times !== undefined && times.map((time, i) => {
                                    return (
                                        <button
                                            onClick={() => props.selectTime(time)}
                                            className={styles.atButtons}
                                            key={'time' + i}
                                            >
                                                {time.split(', ')[1].split(':').map((section, i) => {
                                                    if (i === 0) {
                                                        return section + ':'
                                                    } else if (i === 1) {
                                                        return section + ' '
                                                    } else if (i === 2) {
                                                        return section.split(' ')[1]
                                                    }
                                                    return '';
                                                })}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default AvailableTimes