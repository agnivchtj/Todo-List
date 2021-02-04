import React from 'react';
import Filtered from './Filtered';
import '../main/Main.css';

class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    render() {
        let filtered = this.props.tasks.map((task, index) => {
            return (
                <Filtered content={task} key={index} id={index} />
            );
        });

        return (
            <ul id="filtered-tasks">
                {filtered}
            </ul>
        );
    }
}

export default FilteredList;
