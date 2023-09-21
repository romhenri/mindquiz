import React from 'react'

const Input = ({ type, label, id, placeholder, ...props }) => {
	return (
		<>
			<label htmlFor={id}>
				{label}
				<input
					id={id}
					type={type ? type : 'text'}
					placeholder={placeholder}
					{...props}
				/>
			</label>
		</>
	)
}

export default Input
