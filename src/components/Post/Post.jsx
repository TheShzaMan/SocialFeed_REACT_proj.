import "./Post.css";

const Post = ({ post }) => {
	return (
		<div className='post-container'>
			<div className='post-author'>
				<h4>{post.postAuthor}</h4>
			</div>

			<div className='post-content'>
				<p>{post.postContent}</p>
			</div>

			<div className='like-box'>
				<div className='like'>
					<button className='like'>LIKE</button>{" "}
					{/* some kind of positive emoji maybe hands raised. 100 percent. this is true. */}
				</div>
				<div className='dislike'>
					<button className='dislike'>DISLIKE</button>
					{/* maybe a poop emoji. dislike. disagree. this is a lie.   */}
				</div>
			</div>
		</div>
	);
};

export default Post;
