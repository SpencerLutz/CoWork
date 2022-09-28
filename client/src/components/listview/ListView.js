import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './styles/ListView.module.css'
import WeekSection from './WeekSection.js'
import AddTaskButton from './AddTaskButton.js'
import AddTaskModal from '../addtaskview/AddTaskModal.js'
import { tasksToWeeks, getDateString } from '../../utils/ListView.js'

const ListView = () => {
    const [weeks, setWeeks] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [modalDate, setModalDate] = useState('')

    const getTasks = () => {
        axios.get('https://coworkdev.herokuapp.com/api/users/public/tasks/').then((res) => {
            const data = res.data
            if (data.ok !== 1) console.log('ERROR')
            setWeeks(tasksToWeeks(data.result))
        })
    }
 
    useEffect(() => {
        getTasks()
        // eslint-disable-next-line
    }, [setWeeks])

    return (
        <div className={styles.view}>
            {weeks.map((week) => 
                <WeekSection 
                    week={week} 
                    key={week.startTime}
                    onDayClick={(day) => {
                        setModalDate(getDateString(day))
                        setModalOpen(true)
                    }}
                />
            )}
            <div className={styles.extraSpace}/>
            <AddTaskButton onClick={() => setModalOpen(true)}/>
            {modalOpen && <AddTaskModal 
                onExitClick={() => setModalOpen(false)}
                onAddTask={getTasks}
                defaultDate={modalDate}
            />}
        </div>
    )
}

export default ListView