import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../main/Main.css';

class Completed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            content: {
                message: '',
                completed: true,
                tags: [],
                term: ''
            }
        };
    }

    render() {
        return (
            <li>
                <input type="checkbox" 
                    defaultChecked 
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
                    <FontAwesomeIcon className="faicons" icon="trash" 
                        onClick={
                            () => {
                                this.props.onDelete(this.props.id)
                            }
                        } 
                    />
                </span>
                <h3>Tags:</h3>
                <br/>
                <br/>
                <div class="tags">
                    {
                        this.props.content.tags.map((tag, index) => {
                            return (
                                // eslint-disable-next-line
                                <p><a class="tag">{tag}</a></p>
                            );
                        })
                    }
                </div>
            </li>
        );
    }
}

export default Completed;
