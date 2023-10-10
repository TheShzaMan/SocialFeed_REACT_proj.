import LikeButtons from "../LikeButtons/LikeButtons";
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
			<LikeButtons />
		</div>
	);
};

export default Post;
