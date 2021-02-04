import React from 'react';
import Completed from './Completed';
import '../main/Main.css';

class CompletedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: []
        }
    }

    render() {
        let completed = this.props.tasks.map((task, index) => {
            return (
                <Completed content={task} key={index} id={index} 
                        onCheck={this.props.onCheck} 
                        onDelete={this.props.onDelete} 
                />
            );
        })
    
        return (
            <ul id="completed-tasks">
                {completed}
            </ul>
        );
    }
}

export default CompletedList;
