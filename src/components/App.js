import { useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

const data = {
	currentUser: {
		image: {
			png: "/images/avatars/image-juliusomo.png",
			webp: "/images/avatars/image-juliusomo.webp",
		},
		username: "juliusomo",
	},
	comments: [
		{
			id: 1,
			content:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			createdAt: "1 month ago",
			score: 12,
			user: {
				image: {
					png: "/images/avatars/image-amyrobson.png",
					webp: "/images/avatars/image-amyrobson.webp",
				},
				username: "amyrobson",
			},
			replies: [],
		},
		{
			id: 2,
			content:
				"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
			createdAt: "2 weeks ago",
			score: 5,
			user: {
				image: {
					png: "/images/avatars/image-maxblagun.png",
					webp: "/images/avatars/image-maxblagun.webp",
				},
				username: "maxblagun",
			},
			replies: [
				{
					id: 3,
					content:
						"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
					createdAt: "1 week ago",
					score: 4,
					replyingTo: "maxblagun",
					user: {
						image: {
							png: "/images/avatars/image-ramsesmiron.png",
							webp: "/images/avatars/image-ramsesmiron.webp",
						},
						username: "ramsesmiron",
					},
				},
				{
					id: 4,
					content:
						"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
					createdAt: "2 days ago",
					score: 2,
					replyingTo: "ramsesmiron",
					user: {
						image: {
							png: "/images/avatars/image-juliusomo.png",
							webp: "/images/avatars/image-juliusomo.webp",
						},
						username: "juliusomo",
					},
				},
			],
		},
	],
};

let id = 4;
const idRecorder = () => {
	id += 1;
	return id;
};

function App() {
	const [comments, setComments] = useState(data.comments);

	const addComment = (comment) => {
		setComments([...comments, comment]);
	};
	const deleteComment = (commentId) => {
		const commentsCopy = [...comments];
		setComments(commentsCopy.filter((comment) => comment.id !== commentId));
	};
	const editComment = (newComment) => {
		let commentsCopy = [...comments];
		commentsCopy.forEach((comment, commentIndex) => {
			if (comment.id === newComment.id) {
				commentsCopy[commentIndex] = newComment;
			}
		});
		setComments(commentsCopy);
	};
	const addReply = (reply, commentId) => {
		let commentsCopy = [...comments];
		commentsCopy.forEach((comment) => {
			if (comment.id === commentId) {
				comment.replies.push(reply);
			}
		});
		setComments(commentsCopy);
	};
	const deleteReply = (replyId) => {
		let commentsCopy = [...comments];
		commentsCopy.forEach((comment, commentIndex) => {
			comment.replies.forEach((reply, replyIndex) => {
				if (reply.id === replyId) {
					comment.replies.splice(replyIndex, 1);
					commentsCopy[commentIndex] = comment;
				}
			});
		});
		setComments(commentsCopy);
	};
	const editReply = (newReply) => {
		let commentsCopy = [...comments];
		commentsCopy.forEach((comment, commentIndex) => {
			comment.replies.forEach((reply, replyIndex) => {
				if (reply.id === newReply.id) {
					comment.replies[replyIndex] = newReply;
					commentsCopy[commentIndex] = comment;
				}
			});
		});
		setComments(commentsCopy);
	};

	return (
		<div className="App">
			<div className="comments-list">
				{comments.map((comment) => {
					return (
						<Comment
							comment={comment}
							key={comment.id}
							idRec={idRecorder}
							currentUser={data.currentUser}
							handlePostReply={addReply}
							handleDeleteReply={deleteReply}
							handleEditReply={editReply}
							handleDeleteComment={deleteComment}
							handleEditComment={editComment}
						/>
					);
				})}
				<NewComment
					idRec={idRecorder}
					currentUser={data.currentUser}
					postComment={addComment}
				/>
			</div>
		</div>
	);
}

export default App;
