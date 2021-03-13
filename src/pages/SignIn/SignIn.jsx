import React, { Component } from 'react';
import "./signin.css";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { login } from "../../Services/userServices"

class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      emailFlag: false,
      passwordError: "",
      passwordFlag: false,
      
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      emailFlag: false,
      passwordError: "",
      passwordFlag: false,
    };

    if (this.state.email.length == 0) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter your Email ";
    }
    if (!/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(this.state.email)) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Please Enter Correct Email";
    }
    if (this.state.password.length == 0) {
      errors.passwordFlag = true;
      isError = true;
      errors.passwordError = "Enter Password";
    }

    this.setState({
      ...errors,
    });

    return isError;
  };
  
  

 
  onSubmit = (event) => {
    event.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        email: "",
        emailFlag: false,
        emailError: "",
        password: "",
        passwordFlag: false,
        passwordError: "",
      });
      
      let loginData = {
        
        email: this.state.email,
        password: this.state.password,
        
      };

      console.log('loginData : ',loginData)
      login (loginData).then((data)=>{
        console.log(data);
        localStorage.setItem('token',data.data.token)
        alert('Login Successfull')
      })
      .catch ((error)=>{
        console.log(error)
        alert('Login failed')
      })
     
    }
  };


  render() {
    return (
      <div className="wrapper-tool">
        <Card id='form'>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
              <br>
              </br>
              <Typography component="h1" variant="h5" className="fundooShift">
              <span style={{ color: "#0606f8"}}>F</span>
              <span style={{ color: "#d10303" }}>u</span>
              <span style={{ color: "#f0b000" }}>n</span>
              <span style={{ color: "#0606f8" }}>d</span>
              <span style={{ color: "green" }}>o</span>
              <span style={{ color: "#d10303" }}>o</span>
              </Typography>
              <Typography component="h1" variant="h5" className="head">
              <span style={{ color: "#0606f8"}}>Sign In</span>
              </Typography>
              <form className="form">
                <Grid>

                  <Grid>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Enter Email Address :"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      helperText={this.state.emailError}
                      error={this.state.emailFlag}
                      onChange={(e) => this.change(e)}
                     
                    />
                  </Grid>
                  <br>
                  </br>
                  <Grid>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password"
                      label="Enter Password :"
                      name="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={(e) => this.change(e)}
                      error={this.state.passwordFlag}
                      helperText={this.state.passwordError}
                      />
                  </Grid>
                </Grid >
                <br>
                </br>
                <Grid>
                  <Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      background-color="deepskyblue"
                      onClick={this.onSubmit}
                      >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <Grid className="extra-tool"  >
                  <Grid container justify="flex-start">

                    <Grid item >

                      <Link href="http://localhost:3000/signup" color="textPrimary" >
                         <font color="blue"><u>Create account</u></font>
                      </Link>


                    </Grid >
                  </Grid>
                </Grid>
                <Grid container justify="flex-end" justify style={{ marginTop: 8, marginBottom: 10 }} className="link" style={{ padding: -1 }}>
                  <Link href="http://localhost:3000/forgotPassword" color="textPrimary" >
                      <font color="blue"><u>Forget password?</u></font>
                  </Link>
                </Grid>
                
                
              </form>
            </div>
          </Container>
        </Card >
      </div>
    );
  }
}

export default signin;