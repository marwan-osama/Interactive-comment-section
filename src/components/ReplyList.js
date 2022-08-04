import Reply from "./Reply";

const ReplyList = ({
	replies,
	currentUser,
	handlePostReply,
	handleDeleteReply,
	handleEditReply,
	commentId,
	idRec,
}) => {
	return (
		<div className="reply-list-wrapper">
			<div className="vl"></div>
			<div className="reply-list">
				{replies.map((reply) => {
					return (
						<Reply
							reply={reply}
							currentUser={currentUser}
							handlePostReply={handlePostReply}
							handleDeleteReply={handleDeleteReply}
							handleEditReply={handleEditReply}
							key={reply.id}
							commentId={commentId}
							idRec={idRec}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ReplyList;
