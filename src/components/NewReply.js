import { useState } from "react";
import Button from "./Button";

const NewReply = ({
	currentUser,
	replyingTo,
	handlePostReply,
	commentId,
	idRec,
}) => {
	const [replyText, setReplyText] = useState(`@${replyingTo} `);
	const handleReplyText = (e) => {
		if (e.target.value.search(`@${replyingTo} `) === -1) {
			return;
		}
		setReplyText(e.target.value);
	};

	const handleClick = () => {
		const reply = {
			id: idRec(),
			content: replyText.replace(`@${replyingTo} `, "").trim(),
			createdAt: "1 minute ago",
			score: 0,
			replyingTo: replyingTo,
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
				<img src={currentUser.image.png} alt={currentUser.username} />
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
					disabled={!replyText.replace(`@${replyingTo} `, "").trim()}
				/>
			</div>
		</section>
	);
};

export default NewReply;
