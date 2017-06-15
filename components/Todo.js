import React from 'react';
import { connect } from 'react-redux';

import { addTodo, removeTodo } from '../actions/todo';
import TodoItem from './TodoItem';

class Todo extends React.Component {
	state = {
		text: ''
	};

	addTodos = e => {
		e.preventDefault();

		this.props.addTodo(this.state.text);
		this.setState({ text: '' });
	};

	removeTodo = todo => {
		this.props.removeTodo(todo);
	};

	render() {
		return (
			<div className="mdl-card">
				Test
				<style>{`
						.mdl-card {
							margin: auto;
							transition: all .3s;
							transform: translateY(100px);
						}
					`}</style>
			</div>
		);
	}
}

export default connect(({ todos }) => ({ todos }), { addTodo, removeTodo })(
	Todo
);
