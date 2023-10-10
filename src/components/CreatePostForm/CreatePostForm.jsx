import React, { useState } from "react";
import "./CreatePostForm.css";
const CreatePostForm = ({}) => {
	const [postAuthor, setPostAuthor] = useState();
	const [postContent, setpostContent] = useState();
	const [postTime, setpostTime] = useState();

	return (
		<div>
			<h4>Add to Chisme</h4>
			<form>
				<div className='form-container'>
					<div className='name-input'>
						<label>Name</label>
						<input type='text' />
					</div>
					<div className='content-input'>
						<label>Tell the world</label>
						<input type='area' />
					</div>
					<div className='post-button'>
						<button type='submit'>Post Chisme</button>
						<span>permanently!</span>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreatePostForm;
