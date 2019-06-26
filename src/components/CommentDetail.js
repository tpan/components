import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
	console.log(props.author);
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={faker.image.avatar()} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadeta">
					<span className="date">Today at 6:00pm</span>
				</div>
				<div className="text">Nice post waw</div>
			</div>
		</div>
	);
};

export default CommentDetail;
