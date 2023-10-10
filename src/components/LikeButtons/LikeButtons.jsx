import "./LikeButtons.css";

const LikeButtons = ({}) => {
	return (
		<div className='like-box'>
			<div className='like'>
				<button className='like'>LIKE</button>{" "}
				{/* some kind of positive emoji maybe hands raised. 100 percent. this is true. */}
			</div>
			<div className='dislike'>
				<button className='dislike'>DISLIKE</button>
				{/* maybe a poop emoji. dislike. disagree. this is a lie.   */}
			</div>
		</div>
	);
};

export default LikeButtons;
