import "./PostList.css";
import Post from "../Post/Post";

const PostList = ({ posts }) => {
	const listItems = posts.map((post) => (
		<Post key={post.postId} post={post} />
	));
	return (
		<div className='post-list'>
			<h4 className='title'>Recent Chismes</h4>
			<div>{listItems}</div>
		</div>
	);
};

export default PostList;
