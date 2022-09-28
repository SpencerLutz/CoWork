import DaySection from './DaySection.js'

import styles from './styles/WeekSection.module.css'

const WeekSection = ({ week, onDayClick }) => {
    return (
        <div>
            <div className={styles.title}>
                <h2 className={styles.date}>Week of {week.monthString} {week.date}</h2>
                <p className={styles.time}>Est. Time: {week.timeEst}</p>
            </div>
            {week.days.map((day) => 
                <DaySection 
                    day={day} 
                    key={day.time} 
                    onDayClick={onDayClick}
                />
            )}
        </div>
    )
}

export default WeekSection