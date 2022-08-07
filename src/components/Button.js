const Button = ({ text, handleClick, disabled, className }) => {
	const handleBtnClick = (e) => {
		e.preventDefault();
		handleClick();
	};

	return (
		<button
			onClick={handleBtnClick}
			className={`btn bg-blue clr-white fw-l ${className || ""}`}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
