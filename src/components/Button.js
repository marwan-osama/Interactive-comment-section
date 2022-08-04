const Button = ({ text, handleClick, disabled }) => {
	const handleBtnClick = (e) => {
		e.preventDefault();
		handleClick();
	};

	return (
		<button
			onClick={handleBtnClick}
			className="btn bg-blue clr-white fw-l"
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
