import { Link } from 'react-router-dom'
import { useState } from 'react'

import styles from './styles/ListTask.module.css'

const ListTask = ({ task }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <Link to={`/task/${task.id}`} className={styles.link}>
            <div className={styles.task}
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                style={{
                    boxShadow: (!hovered && `3px 3px 0px ${task.color}`)
                }}
            >
                <div className={styles.left}>
                    <h4 className={styles.title}>{task.name}</h4>
                    {task.category !== '' && 
                        <h5 className={styles.category}>{task.category}</h5>
                    }
                </div>
                <div className={styles.right}>
                    <p className={styles.time}>Est. Time: {task.time}</p>
                    <div className={styles.buttons}>
                        
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ListTask