import React, { useState } from "react";
import "./CreatePostForm.css";
const CreatePostForm = ({ onNewPost, postId }) => {
	const [postAuthor, setPostAuthor] = useState("");
	const [postContent, setPostContent] = useState("");
	const [postTime, setPostTime] = useState(new Date().toString());

	const handleSubmit = (e) => {
		e.preventDefault();
		const dateString = new Date().toString();
		setPostTime(dateString);
		const postData = {
			postId,
			postAuthor,
			postContent,
			postTime,
		};

		onNewPost(postData);
		console.log(postData);
	};
	// const handleChange = (e) => {
	// 	e.target.value;
	return (
		<div>
			<h4 className='post-form'>Add Chismes</h4>
			<form onSubmit={handleSubmit}>
				<div className='form-container'>
					<div className='name-input'>
						<label>Name</label>
						<input
							type='text'
							name='name'
							value={postAuthor}
							onChange={(e) => setPostAuthor(e.target.value)}
						/>
					</div>
					<div className='content-input'>
						<label>Tell the world</label>
						<input
							type='text'
							name='content'
							value={postContent}
							// onChange={handleChange}
							onChange={(e) => setPostContent(e.target.value)}
						/>
					</div>
					<div className='post-button'>
						{/* <button type='submit' onSubmit={handleSubmit}> */}
						<button type='submit'>Post Chisme</button>
						<span>permanently!</span>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreatePostForm;
