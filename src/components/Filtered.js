import React from 'react';
import '../main/Main.css';

class Filtered extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <li>
                <label>{this.props.content.message}</label>
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

export default Filtered;
