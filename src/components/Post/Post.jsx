import "./Post.css";

const Post = ({}) => {
	return (
		<div className='post-container'>
			<div className='post-author'>
				<h4>UserName4571</h4>
			</div>
			<div className='post-content'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
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
