import './Checkbox.scss'
import React, { useState } from 'react'

const sizes = ['xs', 's', 'm', 'l', 'xl']

const Checkbox = ({ checked = false, onChange, className, ...props }) => {
	const classList = ['checkbox']
	if (className) classList.push(className)
	for (let key in props) {
		if (sizes.includes(key)) classList.push(key)
	}

	// const [isChecked, setIsChecked] = useState(checked)

	// function handleOnChange(e) {
	// 	setIsChecked(isChecked ? false : true)
	// 	onChange(e)
	// }

	return (
		<label
			className={classList.join(' ')}
			onClick={(e) => e.stopPropagation()}
		>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<div className="box">
			</div>
			{props.children}
		</label>
	);
};

export default Checkbox;