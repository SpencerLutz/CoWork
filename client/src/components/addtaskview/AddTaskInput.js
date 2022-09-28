import styles from './styles/AddTaskInput.module.css'

const AddTaskInput = ({ label, type, value, placeholder, onChange}) => {
	return (
		<label className={styles.label} type={type}>
			{label}
			<input className={styles.input}
				type={type} 
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</label>
	)
}

export default AddTaskInput