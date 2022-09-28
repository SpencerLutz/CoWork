import { Link } from 'react-router-dom'

import styles from './styles/TaskViewHeader.module.css'

// TODO: Use redux to store tasks and delete from store when delete task

const TaskViewHeader = ({ task, onDelete }) => {
    return (
        <div className={styles.header} style={{boxShadow: `4px 4px ${task.color}`}}>
            <div className={styles.headerLeft}>
                <div className={styles.headerLeftTop}>
                    <h2 className={styles.title}>{task.name}</h2>
                    {task.type !== '' &&
                        <h4 className={styles.type}>{task.type}</h4>
                    }
                </div>
                {task.category !== '' &&
                    <h3 className={styles.category}>{task.category}</h3>
                }
            </div>
            <div className={styles.headerRight}>
                <Link to='/'
                    className={styles.tempExitButton}
                    onClick={onDelete}
                />
            </div>
        </div>
    )
}

export default TaskViewHeader