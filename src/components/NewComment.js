import { useState } from "react";
import Button from "./Button";

const NewComment = ({ currentUser, postComment, idRec }) => {
	const [commentText, setCommentText] = useState("");
	const handleCommentText = (e) => {
		setCommentText(e.target.value);
	};

	const handlePostComment = () => {
		const comment = {
			id: idRec(),
			content: commentText.trim(),
			createdAt: "1 minute ago",
			score: 0,
			user: {
				image: {
					png: currentUser.image.png,
					webp: currentUser.image.webp,
				},
				username: currentUser.username,
			},
			replies: [],
		};
		postComment(comment);
		setCommentText("");
	};
	return (
		<section className="new-comment bg-white">
			<div className="avatar">
				<img src={currentUser.image.png} />
			</div>
			<textarea
				value={commentText}
				onChange={handleCommentText}
				rows="4"
				className="textarea fs-s"
				placeholder="Add a comment..."
			/>
			<div>
				<Button
					handleClick={handlePostComment}
					text="SEND"
					disabled={!commentText.trim()}
				/>
			</div>
		</section>
	);
};

export default NewComment;
