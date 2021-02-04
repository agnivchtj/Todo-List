import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tags from './Tags';
import '../main/Main.css';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            key: '',
            content: {
                message: '',
                completed: false,
                tags: [],
                term: ''
            }
        };
    }

    render() {
        return (
            <li className="editMode">
                <input type="checkbox" 
                    onClick={
                        () => {
                            this.props.onCheck(
                                this.props.id, this.props.content.message, this.props.content.tags
                            )
                        }
                    }
                ></input>
                <label>{this.props.content.message}</label>
                <input 
                    className="input_type"
                    type="text" 
                    value={this.props.content.message} 
                    onChange={
                        (e) => {
                            this.props.setUpdate(e.target.value, this.props.id)
                        }
                    }
                ></input>
                <span>
                    <div class="pos down-arrow" 
                        onClick={
                            () => {
                                this.props.handleAddTag(
                                    this.props.content.tags, this.props.content, this.props.id
                                )
                            }
                        }
                    ></div>
                    <FontAwesomeIcon 
                            className="faicons" 
                            icon="trash" 
                            onClick={() => {this.props.onDelete(this.props.id)}} 
                    />
                </span>
                <br/>
                <h3>Tags:</h3>
                <br/>
                <br/>
                <Tags 
                    tags={this.props.content.tags} 
                    task={this.props.content} 
                    task_id={this.props.id}
                    msg={this.props.content.term}
                    handleTagText={this.props.handleTagText}
                    handleRemoveTag={this.props.handleRemoveTag} 
                />
            </li>
        );
    }
}

export default Todo;
