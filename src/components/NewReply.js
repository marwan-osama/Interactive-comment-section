import { useState } from "react";
import Button from "./Button";

const NewReply = ({ currentUser, handlePostReply, commentId, idRec }) => {
	const [replyText, setReplyText] = useState("");
	const handleReplyText = (e) => {
		setReplyText(e.target.value);
	};

	const handleClick = () => {
		const reply = {
			id: idRec(),
			content: replyText,
			createdAt: "1 minute ago",
			score: 0,
			user: {
				image: {
					png: currentUser.image.png,
					webp: currentUser.image.webp,
				},
				username: currentUser.username,
			},
		};
		handlePostReply(reply, commentId);
	};
	return (
		<section className="new-comment bg-white">
			<div className="avatar">
				<img src={currentUser.image.png} />
			</div>
			<textarea
				value={replyText}
				onChange={handleReplyText}
				rows="4"
				className="textarea fs-s"
				placeholder="Add a reply..."
			/>
			<div>
				<Button
					handleClick={handleClick}
					text="REPLY"
					disabled={!replyText.length}
				/>
			</div>
		</section>
	);
};

export default NewReply;
