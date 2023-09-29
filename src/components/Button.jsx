import React from 'react'
import {useNavigate} from 'react-router-dom';

const Button = ({ text, bg, className, onClick }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		if (onClick === null) {
		
		} else if (onClick === 'returnHome') {
			navigate("/quiz");

   	} else if (onClick) {
			onClick();

		} else {
      console.log("No Function!");
    }
  };

	return (
		<button
			onClick={handleClick}
			style={{ backgroundColor: bg }}
			className={className}
		>
			{text}
		</button>
	)
}

export default Button
