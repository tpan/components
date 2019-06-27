import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/CommentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<Comment
					author="sam"
					timePosted="Today at 4:20PM"
					content="Cool stuff ⚛️"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					author="jim"
					timePosted="Today at 4:20PM"
					content="YES LAWD"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					author="jon"
					timePosted="Today at 4:20PM"
					content="Wowee React"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
