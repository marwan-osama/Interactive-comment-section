import IconButton from "./IconButton";
const CommentButtons = ({
	handleEdit,
	handleDelete,
	handleReply,
	you,
	mobile,
}) => {
	return (
		<div
			className={`comment-buttons ${
				mobile ? "comment-buttons-mobile" : "comment-buttons-large-screen"
			}`}
		>
			{you ? (
				<>
					<IconButton
						icon={process.env.PUBLIC_URL + "/images/icon-delete.svg"}
						text="delete"
						handleClick={handleDelete}
						className="clr-red"
					/>
					<IconButton
						icon={process.env.PUBLIC_URL + "/images/icon-edit.svg"}
						text="Edit"
						handleClick={handleEdit}
					/>
				</>
			) : (
				<IconButton
					icon={process.env.PUBLIC_URL + "/images/icon-reply.svg"}
					text="Reply"
					handleClick={handleReply}
				/>
			)}
		</div>
	);
};

export default CommentButtons;
