import "./LikeButtons.css";
import React from "react";
import { useState } from "react";
const LikeButtons = ({}) => {
	const [like, setLike] = useState("like-inactive");
	const [dislike, setDislike] = useState("dislike-inactive");

	const handleLikeClick = () => {
		if (like === "like-inactive" && dislike === "dislike-inactive") {
			setLike("like-active");
		} else if (like === "like-inactive" && dislike === "dislike-active") {
			setDislike("dislike-inactive");
			setLike("like-active");
		} else {
			setLike("like-inactive");
		}
	};

	const handleDislikeClick = () => {
		if (dislike === "dislike-inactive" && like === "like-inactive") {
			setDislike("dislike-active");
		} else if (dislike === "dislike-inactive" && like === "like-active") {
			setLike("like-inactive");
			setDislike("dislike-active");
		} else {
			setDislike("dislike-inactive");
		}
	};

	return (
		<div className='like-box'>
			<div className='like'>
				<button className={like} onClick={handleLikeClick}>
					LIKE
				</button>{" "}
				{/* some kind of positive emoji maybe hands raised. 100 percent. this is true. */}
			</div>

			<button className={dislike} onClick={handleDislikeClick}>
				DISLIKE
			</button>
			{/* maybe a poop emoji. dislike. disagree. this is a lie.   */}
		</div>
	);
};

export default LikeButtons;
