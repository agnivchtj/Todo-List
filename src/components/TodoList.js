import React from 'react';
import Todo from './Todo';
import '../main/Main.css';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    message: '',
                    completed: false,
                    tags: [],
                    term: ''
                }
            ]
        };
    }

    render() {
        let todos = this.props.tasks.map((todo, index) => {
            return (
                <Todo content={todo} key={index} id={index} 
                    onCheck={this.props.onCheck} 
                    setUpdate={this.props.setUpdate}
                    handleAddTag={this.props.handleAddTag}
                    handleTagText={this.props.handleTagText}
                    handleRemoveTag={this.props.handleRemoveTag}
                    onDelete={this.props.onDelete} 
                />
            );
        }) 

        return (
            <ul id="incomplete-tasks">
                {todos}
            </ul>
        );
    }
}

export default TodoList;
