import React from 'react';

const CommentDetail = (props) => {
	console.log(props.author);
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadeta">
					<span className="date">{props.timePosted}</span>
				</div>
				<div className="text">{props.content}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
