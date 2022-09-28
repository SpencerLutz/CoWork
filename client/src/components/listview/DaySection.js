import { useState, useEffect } from 'react'

import ListTask from './ListTask.js'
import styles from './styles/DaySection.module.css'

const resizeStep = 720
const emptyTaskIndicator = 'none'
const todayColor = '#DDEEFF'

const splitUp = (tasks, num) => {
    const ret = []
    var group = []
    tasks.forEach((task) => {
        group.push(task)
        if (group.length >= num) {
            ret.push(group)
            group = []
        }
    })
    if (group.length > 0) {
        while (group.length < num) group.push(emptyTaskIndicator)
        ret.push(group)
    }
    return ret
}

const isToday = (day) => {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return day.time === today.getTime() / 1000
}

const DaySection = ({ day, onDayClick }) => {
    const [groups, setGroups] = useState([])
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const num = Math.ceil(window.innerWidth / resizeStep)
        setGroups(splitUp(day.tasks, num))
        window.addEventListener('resize', handleResize)
        // eslint-disable-next-line
    }, [day])

    const handleResize = () => {
        const num = Math.ceil(window.innerWidth / resizeStep)
        setGroups(splitUp(day.tasks, num))
    }

    return (
        <div className={styles.section}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => onDayClick(new Date(day.time * 1000))}
            style={{backgroundColor: (isToday(day) && !hovered && todayColor)}}
        >
            <div className={styles.title}>
                <h3 className={styles.date}>{day.dayString}, {day.month}/{day.date}</h3>
                <div className={styles.bar}/>
                <p className={styles.time}>Est. Time: {day.timeEst}</p>
                <div className={styles.barEnd}/>
            </div>
            {groups.map((group) => (
                <div className={styles.group}> 
                    {group.map((task) => (
                        task === emptyTaskIndicator ? 
                            <div className={styles.empty}/> :
                            <ListTask 
                                task={task} 
                                key={task.id}
                            />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default DaySection