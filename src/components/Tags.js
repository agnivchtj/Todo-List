import React from 'react';
import TextField from '@material-ui/core/TextField';
import Tag from './Tag';
import '../main/Main.css';


class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            task: {
                message: '',
                completed: false,
                tags: [],
                term: ''
            },
            task_id: '',
            msg: ''
        };
    }

    render() {
        let tags = this.props.tags.map((tag, index) => {
            return (
                <p>
                    <Tag content={tag} key={index} id={index} 
                        task_index={this.props.task_id} task_obj={this.props.task} tags_mult={this.props.tags} 
                        handleRemoveTag={this.props.handleRemoveTag}
                    />
                </p>
            );
        });

        return (
            <div class="tags">
                {tags}
                { 
                    (this.props.tags.length < 3) ? 
                        (
                            <p>
                                <TextField 
                                        style={{ width: '100px' }}
                                        className='tag-input'
                                        type='text'
                                        placeholder='Add tag'
                                        value={this.props.msg}
                                        inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                                        onChange={
                                            (e) => {
                                                this.props.handleTagText(e.target.value, this.props.task_id)
                                            }
                                        }
                                />
                            </p>
                        ) : (
                            <div></div>
                        )
                }
            </div>
        );
    }
}

export default Tags;
