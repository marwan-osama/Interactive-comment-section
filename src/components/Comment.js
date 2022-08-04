import ReplyList from "./ReplyList";
import Score from "./Score";
import IconButton from "./IconButton";
import { useState } from "react";
import NewReply from "./NewReply";
import Button from "./Button";

const Comment = ({
	comment,
	currentUser,
	handlePostReply,
	handleDeleteReply,
	handleEditReply,
	handleDeleteComment,
	handleEditComment,
	idRec,
}) => {
	const [newReplyForComment, setNewReplyForComment] = useState(false);
	const [textEdit, setTextEdit] = useState(comment.content);
	const [editMode, setEditMode] = useState(false);

	const toggleNewReplyForComment = () => {
		setNewReplyForComment(!newReplyForComment);
	};

	const addReply = (reply, commentId) => {
		toggleNewReplyForComment();
		handlePostReply(reply, commentId);
	};

	const deleteComment = () => {
		handleDeleteComment(comment.id);
	};
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleTextEdit = (e) => {
		setTextEdit(e.target.value);
	};

	const updateScore = (newScore) => {
		const commentCopy = { ...comment };
		commentCopy.score = newScore;
		handleEditComment(commentCopy);
	};

	const updateText = () => {
		const commentCopy = { ...comment };
		commentCopy.content = textEdit;
		handleEditComment(commentCopy);
		setEditMode(false);
	};

	return (
		<div className="comment-wrapper">
			<section className="comment">
				<Score score={comment.score} handleUpdateScore={updateScore} />
				<article className="comment-content">
					<div className="comment-top-section">
						<div className="user-details">
							<span className="avatar">
								<img
									src={process.env.PUBLIC_URL + comment.user.image.png}
									alt={comment.user.username}
								/>
							</span>
							<span className="username fw-m fs-s">
								{comment.user.username}
							</span>
							{comment.user.username === currentUser.username && (
								<div className="you-wrapper">
									<span className="bg-blue clr-white you fs-xxs">you</span>
								</div>
							)}
							<span className="created-at clr-gray-blue">
								{comment.createdAt}
							</span>
						</div>
						<div className="comment-buttons">
							{comment.user.username === currentUser.username ? (
								<>
									<IconButton
										icon={process.env.PUBLIC_URL + "/images/icon-delete.svg"}
										text="delete"
										handleClick={deleteComment}
										className="clr-red"
									/>
									<IconButton
										icon={process.env.PUBLIC_URL + "/images/icon-edit.svg"}
										text="Edit"
										handleClick={toggleEditMode}
									/>
								</>
							) : (
								<IconButton
									icon={process.env.PUBLIC_URL + "/images/icon-reply.svg"}
									text="Reply"
									handleClick={toggleNewReplyForComment}
								/>
							)}
						</div>
					</div>
					{editMode ? (
						<>
							<textarea
								className="textarea fs-s"
								value={textEdit}
								onChange={handleTextEdit}
								rows={4}
							/>
							<div className="comment-bottom">
								<Button text="UPDATE" handleClick={updateText} />
							</div>
						</>
					) : (
						<div className="comment-text clr-gray-blue">{comment.content}</div>
					)}
				</article>
			</section>
			{newReplyForComment && (
				<NewReply
					currentUser={currentUser}
					handlePostReply={addReply}
					commentId={comment.id}
					idRec={idRec}
				/>
			)}
			{comment.replies.length ? (
				<ReplyList
					replies={comment.replies}
					currentUser={currentUser}
					handlePostReply={handlePostReply}
					handleDeleteReply={handleDeleteReply}
					handleEditReply={handleEditReply}
					commentId={comment.id}
					idRec={idRec}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Comment;
