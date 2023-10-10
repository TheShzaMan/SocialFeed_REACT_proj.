import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";

function App() {
	// dummy posts to delete later

	return (
		<div className='App'>
			<Header />
			<div className='body'>
				{/* <CreatePostForm /> */}
				<PostList />
			</div>
		</div>
	);
}

export default App;
