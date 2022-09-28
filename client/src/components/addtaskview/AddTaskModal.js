import { useState } from 'react'
import axios from 'axios'

import ExitModalButton from './ExitModalButton'
import AddTaskInput from './AddTaskInput'
import { getDateString, dateStringToDate } from '../../utils/ListView.js'
import styles from './styles/AddTaskModal.module.css'

const AddTaskModal = ({ onExitClick, onAddTask, defaultDate }) => {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [type, setType] = useState('')
	const [date, setDate] = useState(
		defaultDate === '' ? getDateString(new Date()) : defaultDate
	)
	const [color, setColor] = useState("#DD0050")

	const onSubmit = (e) => {
		e.preventDefault()
		const taskData = {
			...(name !== '' && {name: name}),
			...(category !== '' && {category: category}),
			...(type !== '' && {type: type}),
			date: dateStringToDate(date).getTime() / 1000,
			color: color
		}

		axios.post(`http://localhost:3002/users/public/tasks/`, taskData)
			.then((res) => {
				if (res.data.ok !== 1) console.log("Error adding task")
				onAddTask()
			})

		onExitClick()
	}
	
	// TODO: Make some menus dropdowns (with add functionality somehow)
	return (
		<div className={styles.background}>
			<div className={styles.modal}>
				<h2 className={styles.title}>
					Create New Task
				</h2>
				<ExitModalButton onClick={onExitClick}/>
				<form onSubmit={onSubmit} className={styles.form}>
					<AddTaskInput 
						label='Name:' type='text' value={name}
						placeholder='Name your new assignment...'
						onChange={e => setName(e.target.value)}
					/>
					<AddTaskInput 
						label='Category:' type='text' value={category}
						placeholder='e.g. ENGL101, Internship, etc...'
						onChange={e => setCategory(e.target.value)}
					/>
					<AddTaskInput 
						label='Type:' type='text' value={type}
						placeholder='Type of assignment...'
						onChange={e => setType(e.target.value)}
					/>
					<AddTaskInput 
						label='Due Date:' type='date' value={date}
						onChange={e => setDate(e.target.value)}
					/>
					<AddTaskInput 
						label='Color:' type='color' value={color}
						onChange={e => setColor(e.target.value)}
					/>
					<input 
						type='submit' 
						value='Add Task'
						className={styles.submit}
					/>
				</form>
			</div>
		</div>
	)
}

export default AddTaskModal