import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";

function App() {
	// dummy posts to delete later

	return (
		<div className='App'>
			<Header />

			<div className='body'>
				<div className='posts'>
					<PostList />
				</div>
				<div className='new-post'>
					<CreatePostForm />
				</div>
			</div>
		</div>
	);
}

export default App;
