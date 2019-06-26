import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<Comment author="sam" />
			<Comment author="jim" />
			<Comment author="jon" />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
