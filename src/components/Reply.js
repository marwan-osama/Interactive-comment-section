import Score from "./Score";
import CommentButtons from "./CommentButtons";
import { useState } from "react";
import NewReply from "./NewReply";
import Button from "./Button";
import { CSSTransition } from "react-transition-group";

const Reply = ({
	reply,
	currentUser,
	handlePostReply,
	handleDeleteReply,
	handleEditReply,
	idRec,
	commentId,
}) => {
	const [newReplyforReply, setNewReplyforReply] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [textEdit, setTextEdit] = useState(reply.content);

	const toggleNewReplyforReply = () => {
		setNewReplyforReply(!newReplyforReply);
	};

	const addReply = (reply, commentId) => {
		toggleNewReplyforReply();
		handlePostReply(reply, commentId);
	};

	const deleteReply = () => {
		handleDeleteReply(reply.id);
	};

	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleTextEdit = (e) => {
		setTextEdit(e.target.value);
	};

	const updateScore = (newScore) => {
		const replyCopy = { ...reply };
		replyCopy.score = newScore;
		handleEditReply(replyCopy, commentId);
	};

	const updateText = () => {
		const replyCopy = { ...reply };
		replyCopy.content = textEdit;
		handleEditReply(replyCopy, commentId);
		setEditMode(false);
	};

	return (
		<>
			<section className="comment">
				<div className="vote-wrapper">
					<Score score={reply.score} handleUpdateScore={updateScore} />
					<CommentButtons
						you={reply.user.username === currentUser.username}
						mobile={true}
						handleDelete={deleteReply}
						handleEdit={toggleEditMode}
						handleReply={toggleNewReplyforReply}
					/>
				</div>
				<article className="comment-content">
					<div className="comment-top-section">
						<div className="user-details">
							<span className="avatar">
								<img
									src={process.env.PUBLIC_URL + reply.user.image.png}
									alt={reply.user.username}
								/>
							</span>
							<span className="username fw-m fs-s">{reply.user.username}</span>
							{reply.user.username === currentUser.username && (
								<div className="you-wrapper">
									<span className="bg-blue clr-white you fs-xxs">you</span>
								</div>
							)}
							<span className="created-at clr-gray-blue">
								{reply.createdAt}
							</span>
						</div>
						<CommentButtons
							you={reply.user.username === currentUser.username}
							mobile={false}
							handleDelete={deleteReply}
							handleEdit={toggleEditMode}
							handleReply={toggleNewReplyforReply}
						/>
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
						<div className="comment-text clr-gray-blue">{reply.content}</div>
					)}
				</article>
			</section>
			<CSSTransition
				in={newReplyforReply}
				timeout={{
					enter: 400,
					exit: 200,
				}}
				unmountOnExit
				mountOnEnter
				classNames="scale"
			>
				<NewReply
					currentUser={currentUser}
					handlePostReply={addReply}
					idRec={idRec}
					commentId={commentId}
				/>
			</CSSTransition>
		</>
	);
};

export default Reply;
