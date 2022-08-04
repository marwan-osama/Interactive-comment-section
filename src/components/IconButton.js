const IconButton = ({ icon, text, handleClick, disabled, className }) => {
	return (
		<button
			className={`icon-btn fw-l fs-s clr-blue ${className}`}
			onClick={handleClick}
			disabled={disabled}
		>
			<img src={icon} alt={text + "icon"} />
			{text}
		</button>
	);
};

export default IconButton;
