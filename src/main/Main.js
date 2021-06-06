import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import SubmitForm from '../components/SubmitForm';
import SearchItem from '../components/SearchItem';
import FilteredList from '../components/TodoList';
import CompletedList from '../components/CompletedList';
import TodoList from '../components/TodoList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Main.css';


library.add(faTrash);

class Main extends React.Component {
    state = {
        tasks: [
            {
                message: 'Do homework',
                completed: false,
                tags: ['daily', 'work'],
                term: ''
            }, 
            {
                message: 'Study for exam',
                completed: false,
                tags: ['university', 'open-book'],
                term: ''
            }, 
            {
                message: 'Buy groceries',
                completed: false,
                tags: ['chores'],
                term: ''
            }
        ],
        completed_tasks: [
            {
                message: 'Finish coding assignment',
                completed: true,
                tags: ['app'],
                term: ''
            }
        ], 
        filtered_tasks: [], 
        search_term: ''
    };

    //Adding a new item
    handleSubmit = (new_msg) => {
        let task = {
            message: new_msg,
            completed: false,
            tags: [],
            term: ''
        }

        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }
    
    //Removing an item
    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);

        this.setState({
            tasks: newArr
        });
    }

    //Removing a completed item
    handleDeleteCompleted = (index) => {
        const newArr = [...this.state.completed_tasks];
        newArr.splice(index, 1);

        this.setState({
            completed_tasks: newArr
        });
    }

    //Marking an item as complete
    handleCheck = (index, msg, tgs) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);

        let task = {
            message: msg,
            completed: true,
            tags: tgs,
            term: ''
        }

        this.setState({
            tasks: newArr,
            completed_tasks: [...this.state.completed_tasks, task]
        });
    }

    //Marking an item as incomplete
    handleCheckCompleted = (index, msg, tgs) => {
        const newArr = [...this.state.completed_tasks];
        newArr.splice(index, 1);

        let task = {
            message: msg,
            completed: false,
            tags: tgs,
            term: ''
        }

        this.setState({
            tasks: [...this.state.tasks, task],
            completed_tasks: newArr
        });
    }

    //Updating the text on an item
    setUpdate = (text, index) => {
        const new_tasks = [...this.state.tasks];

        for (let i = 0; i < new_tasks.length; i++) {
            if (i === index) {
                new_tasks[i].message = text;
            }
        }

        this.setState({
            tasks: new_tasks
        });
    }

    //Adding a tag to an item
    handleAddTag = (tags, task, task_index) => {
        if (tags.length < 3 && task.term.length > 0) {
            const new_tags = [...tags, task.term];

            let updated_task = {
                message: task.message,
                completed: task.completed,
                tags: new_tags,
                term: ''
            }

            const newArr = [...this.state.tasks];
            newArr[task_index] = updated_task;

            this.setState({
                tasks: newArr
            });

        } else {
            let updated_task = {
                message: task.message,
                completed: task.completed,
                tags: task.tags,
                term: ''
            }

            const newArr = [...this.state.tasks];
            newArr[task_index] = updated_task;

            this.setState({
                tasks: newArr
            });
        }
    }

    //Setting the tag text
    handleTagText = (text, index) => {
        const new_tasks = [...this.state.tasks];

        for (let i = 0; i < new_tasks.length; i++) {
            if (i === index) {
                new_tasks[i].term = text;
            }
        }

        this.setState({
            tasks: new_tasks
        });
    }

    //Removing the tag on an item
    handleRemoveTag = (tags, index, task, task_index) => {
        const new_tags = [...tags];
        new_tags.splice(index, 1);

        let updated_task = {
            message: task.message,
            completed: task.completed,
            tags: new_tags,
            term: task.term
        }

        const newArr = [...this.state.tasks];
        newArr[task_index] = updated_task;

        this.setState({
            tasks: newArr
        });
    }

    //Search for items by tag
    handleSearch = (tag) => {
        if (tag) {
            const newArr = [...this.state.tasks];

            this.setState({
                filtered_tasks: newArr.filter(i => i.tags.includes(tag)),
                search_term: tag
            });

        } else {
            this.setState({
                filtered_tasks: [],
                search_term: ''
            })
        }
    }

    signOut = () => {
        window.location.href = '/';
    }


    render() {
        let theme = createMuiTheme({
            overrides: {
                MuiInput: {
                    underline: {
                        '&:after': {
                            borderBottom: '2px solid white'
                        },
                    }
                }
            }
        });
      
        if (this.state.search_term.length > 0) {
            return (
                <MuiThemeProvider theme={theme}>
                <div className="container">
                        <div className='card-header'>
                            <h1 className='card-header-title header'>
                                You have {this.state.tasks.length} Todos
                            </h1>
                        </div>
                        <br/>
                        <Button
                            className='button'
                            variant='contained'
                            style={{ margin: 'auto', display: 'block' }}
                            onClick={this.signOut}
                        >
                            Logout
                        </Button>
                        <br/>

                        <h3>Search Item</h3>
                        <SearchItem search_term={this.state.search_term} 
                                onSearch={this.handleSearch} 
                        />

                        <FilteredList tasks={this.state.filtered_tasks} />
                </div>
                </MuiThemeProvider>
            );
        } else {
            return (
                <MuiThemeProvider theme={theme}>
                <div className="container">
                        <div className='card-header'>
                            <h1 className='card-header-title header'>
                                You have {this.state.tasks.length} Todos
                            </h1>
                        </div>
                        <br/>
                        <Button
                            className='button'
                            variant='contained'
                            style={{ margin: 'auto', display: 'block' }}
                            onClick={this.signOut}
                        >
                            Logout
                        </Button>
                        <br/>

                        <h3>Search By Tag</h3>
                        <SearchItem 
                                search_term={this.state.search_term} 
                                onSearch={this.handleSearch} 
                        />

                        <SubmitForm onFormSubmit={this.handleSubmit} />

                        <h3>Todo</h3>
                        <TodoList tasks={this.state.tasks} 
                                onCheck={this.handleCheck} 
                                setUpdate={this.setUpdate} 
                                handleAddTag={this.handleAddTag}
                                handleTagText={this.handleTagText}
                                handleRemoveTag={this.handleRemoveTag}
                                onDelete={this.handleDelete} 
                        />
                        <br/>

                        <h3>Completed</h3>
                        <CompletedList tasks={this.state.completed_tasks} 
                                onCheck={this.handleCheckCompleted} 
                                onDelete={this.handleDeleteCompleted} 
                        />
                        <br/>
                </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default Main;