import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import TaskViewHeader from './TaskViewHeader'
import styles from './styles/TaskView.module.css'

const TaskView = () => {
    const [task, setTask] = useState({})

    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3002/users/public/tasks/${params.id}`).then((res) => {
            const data = res.data
            if (data.ok !== 1) console.log('ERROR')
            setTask(data.result)
        })
        // eslint-disable-next-line
    }, [])

    const deleteTask = () => {
        axios.delete(`http://localhost:3002/users/public/tasks/${params.id}`).then((res) => {
            const data = res.data
            if (data.ok !== 1) console.log('ERROR')
        })
    }

    return (
        <div className={styles.view}>
            <TaskViewHeader task={task} onDelete={deleteTask}/>
            <div className={styles.desc}>
                <p>{task.desc || "No Description"}</p>
            </div>
        </div>
    )
}

export default TaskView