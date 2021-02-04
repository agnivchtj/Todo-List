import React from 'react';
import '../main/Main.css';


class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            key: '',
            content: '',
            task_index: '',
            task_obj: {
                message: '',
                completed: false,
                tags: [],
                term: ''
            },
            tags_mult: []
        };
    }

    render() {
        return (
            // eslint-disable-next-line
            <a class="tag" onClick={
                () => {
                    this.props.handleRemoveTag(
                        this.props.tags_mult, this.props.id, this.props.task_obj, this.props.task_index
                    )
                }
            }>{this.props.content}</a>
        );
    }
}

export default Tag;
