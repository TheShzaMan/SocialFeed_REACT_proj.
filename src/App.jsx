import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import dummyPosts from "./components/DummyData/DummyData";
import { useState, useEffect } from "react";

function App() {
	const [posts, setPosts] = useState(dummyPosts);
	const postId = posts.length + 1;
	const handleNewPost = (newPost) => {
		const newPosts = [newPost, ...posts];
		setPosts(newPosts);
	};
	console.log(postId);

	return (
		<div className='App'>
			<Header />

			<div className='body'>
				<div className='posts'>
					<PostList key={postId} posts={posts} />
					{/* <PostList posts={} /> */}
				</div>
				<div className='new-post'>
					<CreatePostForm onNewPost={handleNewPost} postId={postId} />
				</div>
			</div>
		</div>
	);
}

export default App;
