import IconButton from "./IconButton";
const CommentButtons = ({
	handleEdit,
	handleDelete,
	handleReply,
	newReplyOpened,
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
				<>
					{newReplyOpened ? (
						<IconButton
							icon={process.env.PUBLIC_URL + "/images/icon-cancel.svg"}
							text="Cancel"
							handleClick={handleReply}
							className="clr-black"
						/>
					) : (
						<IconButton
							icon={process.env.PUBLIC_URL + "/images/icon-reply.svg"}
							text="Reply"
							handleClick={handleReply}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default CommentButtons;
