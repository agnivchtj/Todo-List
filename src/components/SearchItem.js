import React from 'react';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import '../main/Main.css';


class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: ''
        };
    }

    render() {
        return (
            <CardContent>
                <TextField 
                        fullWidth
                        className='search-input'
                        type='text'
                        placeholder='Searching for...'
                        value={this.props.search_term}
                        inputProps={{style: {fontFamily: 'Arial', color: 'white'}}}
                        onChange={
                            (e) => {
                                this.props.onSearch(e.target.value);
                            }
                        }
                />
            </CardContent>
        );
    }
}

export default SearchItem;
