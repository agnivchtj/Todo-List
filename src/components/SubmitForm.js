import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import '../main/Main.css';


class SubmitForm extends React.Component {
    state = { term: '' };
  
    render() {

      return (
        <form>
            <CardContent>
                <label for="new-task">Add Item</label>
                <TextField 
                        fullWidth
                        className='input'
                        type='text'
                        placeholder='Enter Item'
                        value={this.state.term}
                        inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                        onChange={
                            (event) => this.setState({
                                term: event.target.value
                            })
                        }
                />
                <br/>
                <br/>
                <Button
                        className='button'
                        variant='contained'
                        style={{ margin: 'auto', display: 'block' }}
                        onClick={
                            (event) => {
                                event.preventDefault();
                                if (this.state.term === '') return;
                                this.props.onFormSubmit(this.state.term);
                                this.setState({ term: '' });
                            }
                        }
                >
                    Submit
                </Button>
            </CardContent>
        </form>
      );
    }
}

export default SubmitForm;
