import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''};
    }

    verifyToken() {
        const authToken = '123456abcdef';

        return (sessionStorage.getItem('auth-token') && sessionStorage.getItem('auth-token') === authToken);
    }

    render() {
        const { username, password } = this.state;

        return (
            <div class="view-login-view">
                <div>
                    <Grid container style={{ minHeight: '100vh' }}>
                        <Card style={{ margin: 'auto', display: 'block', width: 405 }}>
                            <CardHeader title={'Todo List App'} style={{ textAlign: 'center', background: '#212121', color: '#fff' }} />
                            <CardContent>
                                <div>
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        type="text"
                                        value={username}
                                        onChange={
                                            (event) => {
                                                this.setState({
                                                    username: event.target.value
                                                });
                                            }
                                        }
                                    />
                                    <br />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={
                                            (event) => {
                                                this.setState({
                                                    password: event.target.value
                                                });
                                            }
                                        }
                                    />
                                </div>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    id="button"
                                    onClick={
                                        (event) => {
                                            event.preventDefault();
                                            
                                            let creds = {
                                                username: 'user',
                                                password: 'pass'
                                            }
            
                                            if ((this.state.username === creds.username) && (this.state.password === creds.password)) {
                                                const token = '123456abcdef';
                                                sessionStorage.setItem('auth-token', token);
                                                if (this.verifyToken()) window.location.href = '/main';
                                            } else {
                                                alert('Wrong email or password combination');
                                            }

                                        }
                                    }
                                >
                                    Login
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Login;
