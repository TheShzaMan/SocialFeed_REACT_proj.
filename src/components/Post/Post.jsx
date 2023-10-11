import LikeButtons from "../LikeButtons/LikeButtons";
import "./Post.css";

const Post = ({ post }) => {
	return (
		<div key={post.postId} className='post-container'>
			<div className='content-left'>
				<div className='post-author'>
					<h4>{post.postAuthor}</h4>
				</div>

				<div className='post-content'>
					<p>{post.postContent}</p>
				</div>
			</div>
			<div className='content-right'>
				<div className='time-stamp'>
					<p>{post.postTime}</p>
				</div>
				<LikeButtons />
			</div>
		</div>
	);
};

export default Post;
