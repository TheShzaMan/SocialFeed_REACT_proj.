import "./PostList.css";
import Post from "../Post/Post";

const PostList = ({}) => {
	const posts = [
		{
			Id: 1,
			postAuthor: "dan8854",
			postContent: "et sollicitudin ac orci phasellus",
		},
		{
			Id: 2,
			postAuthor: "tina9898",
			postContent:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			Id: 3,
			postAuthor: "stevie9999",
			postContent:
				"velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus",
		},
		{
			Id: 4,
			postAuthor: "jojo0101",
			postContent:
				"quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu",
		},
	];
	///////////     Use activeIndex from movies-front-end/app.jsx  //////////////
	console.log(posts);
	const singlePost = posts.map((post) => <Post post={post} />);
	return (
		<div className='post-list'>
			<h4>Recent Chismes</h4>
			<div>{singlePost}</div>
		</div>
	);
};

export default PostList;
