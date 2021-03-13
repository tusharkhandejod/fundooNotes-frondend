import React, { Component } from "react";
import "./signup.css"
import { Card, Container, CssBaseline, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { registration } from "../../Services/userServices"



class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          Rpassword: "",
          errorValid: {
            firstname: false,
            lastname: false,
            email: false,
            password: false,
            Rpassword: false,
            showPassword : false,
          },
          enable: true,
          service: "advance",
          errors: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            Rpassword: "",
          },
        };
      }


    
      handleFirstNameInput = (event) => {
        event.preventDefault();
        this.setState({
          firstname: event.target.value,
        });
        let errors = this.state.errors;
        let validate = false;
        const regexvalidatefirstName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);
        if (!regexvalidatefirstName.test(this.state.firstname)) {
          errors.firstname = "First Name is incorrect";
          validate = true;
        } else {
          errors.firstname = "";
        }
        this.setState({
          errorValid: { firstname: validate },
          errors: { firstname: errors.firstName },
        });
      };
      
      handleLastNameInput = (event) => {
        event.preventDefault();
        this.setState({
          lastname: event.target.value,
        });
        let errors = this.state.errors;
        let validate = false;
        
        const regexvalidatelastName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);
        if (!regexvalidatelastName.test(event.target.value)) {
          errors.lastname = "Last Name is incorrect";
          validate = true;
        } else {
          errors.lastname = "";
        }
        this.setState({
          errorValid: { lastname: validate },
          errors: { lastname: errors.lastname },
        });
      };
    
       

      handleEmailInput = (event) => {
        event.preventDefault();
        this.setState({
          email: event.target.value,
        });
        let errors = this.state.errors;
        let validate = false;
        const regexValidateEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/);
        if (!regexValidateEmail.test(event.target.value)) {
          errors.email = "Email is not according to the syntx";
          validate = true;
        } else {
          errors.email = "";
        }
        this.setState({
          errorValid: { email: validate },
          errors: { email: errors.email },
        });
      };

      handlePasswordInput = (event) => {
        event.preventDefault();
        this.setState({
          hidePassword: true,
          password: event.target.value,
          icEye: 'visibility-off',
        });
        let errors = this.state.errors;
        let validate = false;
        const regexvalidatePassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
        if (!regexvalidatePassword.test(event.target.value)) {
          errors.password =
            "Password is not valid";
          validate = true;
        } else {
          errors.password = "";
        }
        this.setState({
          errorValid: { password: validate },
          errors: { password: errors.password },
        });
      };
      
      
      handleReapetPasswordInput = (event) => {
        event.preventDefault();
        this.setState({
          hidePassword: true,
          Rpassword: event.target.value,
          icEye: 'visibility-off',
        });
        let errors = this.state.errors;
        let validate = false;
        if (this.state.password !== this.state.Rpassword) {
    
          errors.Rpassword =
            "";
          validate = true;
    
        } else if (this.state.password === this.state.Rpassword) {
          errors.Rpassword = true;
        }
        this.setState({
    
          errorValid: { Rpassword: validate },
          errors: { Rpassword: errors.Rpassword },
        });
       
      };
    
    handleSubmit =(event) =>{
      event.preventDefault();
        if( this.state.firstname === "" && this.state.lastname === "" && this.state.email === "" && this.state.password === "" ){
        this.setState({
                 errorValid: {
                   email: true,
                   password: true,
                   firstName: true,
                   lastName: true,
                 },
                 errors: {
                   email: "email field shoul not be empty",
                   password: "password field should not be empty",
                   firstName: "firstname field should not be empty",
                   lastName: "lastname field should not be empty",
                 },
               });
        }

        if (this.state.email !== "" && 
          this.state.password !== "" && this.state.lastName !== "" 
          && this.state.firstName !== "") {
           
            let userData = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email: this.state.email,
              password: this.state.password,
            }

            console.log('userData : ',userData)
            registration (userData).then((data)=>{
              console.log(data);
              
            })
            .catch ((error)=>{
              console.log(error)
            })

        }


       
     }
      
      render() {
        return (
          <div className="inline-wrapper">
            <Card id='card'>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="inline-paper">
                <br>
                </br>  
            <Typography className="app_name" variant="h5" color="textSecondary">
                  <span style={{ color: "#0606f8" }}>F</span>
                  <span style={{ color: "#d10303" }}>u</span>
                  <span style={{ color: "#f0b000" }}>n</span>
                  <span style={{ color: "#0606f8" }}>d</span>
                  <span style={{ color: "green" }}>o</span>
                  <span style={{ color: "#d10303" }}>o</span>
            </Typography>
              <br>
              </br>
            <Typography component="h1" variant="h5" className="header">
                  <div className="header-content">
                    <font color="blue">Sign up</font>
                  </div>
            </Typography>
              <br>
              </br>
                  <form className="form">
                    <div className="address">
                      <Grid container spacing={2}>
    
                        <Grid item xs={12} sm={6} style={{ marginTop: 3, marginBottom: 3 , marginRight:-20 , marginLeft: -5}}>
                          <div  className="name">
                            <div className="first-Name">
                            <TextField
                             height="100"
                              autoComplete="fname"
                              name="firstname"
                              variant="outlined"
                              required
                              fullWidth
                              id="firstname"
                              label="First Name"
                              
                              value={this.state.firstname}
                              error={this.state.errorValid.firstname}
                              onChange={this.handleFirstNameInput}
                              helperText={this.state.errors["firstname"]}
                             
                            />
                            </div>
                          </div>
                        </Grid>
                        <Grid  item xs={12} sm={6} style={{ marginTop: 2, marginBottom: 3 ,marginLeft:20 , marginRight:-30}}>
                          <div  className="last-name">
                          <div  className="first-Name">
                            <TextField
                             height="8"
                              variant="outlined"
                              required
                              fullWidth
                              id="lastname"
                              label="Last Name"
                              name="lastname"
                              
                              value={this.state.lastname}
                              error={this.state.errorValid.lastname}
                              onChange={this.handleLastNameInput}
                              helperText={this.state.errors["lastname"]}
                             
                            />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12}  >
                          <Grid style={{ marginTop: 25, marginBottom: 3 ,marginLeft:-3}} >
                            <div className="email-address">
                              <div className="first-Name" >
                              <TextField
                               height="8"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                error={this.state.errorValid.email}
                                onChange={this.handleEmailInput}
                                helperText={this.state.errors["email"]}
                               
                              />
                              </div>
                            </div>
                          </Grid>
                        </Grid>
    
    
                        <Grid item xs={12} >
                          <Grid  style={{ marginTop: 25, marginBottom: 3 ,marginLeft:-3 ,height:5}}>
                            <div  className="passwrord-Id">
                              <div className="first-Name">
                              <TextField
                                height="8"
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                error={this.state.errorValid.password}
                                onChange={this.handlePasswordInput}
                                helperText={this.state.errors["password"]}
                                type={this.state.showPassword ? 'text' : 'password'}
                                
                               />
 
                              </div>
    
                            </div>
                          </Grid>
                        </Grid>
    
                        <Grid item xs={12}  >
                          <Grid style={{ marginTop: 55, marginBottom: 3 , marginLeft:-3 }}>
                          <div className="passwrord-Id">
                              <div  className="first-Name">
                              <TextField
                                height="8"
                                variant="outlined"
                                required
                                fullWidth
                                name="rpassword"
                                label="confirm Password"
                                type="rpassword"
                                id="rpassword"
                                autoComplete="current-password"
                                error={this.state.errorValid.Rpassword}
                                onChange={this.handleReapetPasswordInput}
                                helperText={this.state.errors["Rpassword"]}
                                type="text"
                                type={this.state.showPassword ? 'text' : 'password'}
                            
                              />
                              </div>
                              
                            </div>
                          </Grid>
                        </Grid>
    
                      </Grid >
                       
                      <div className="createAccount">
                      <Grid  style={{ marginTop: 45, marginLeft: -1  }}>
                        <div className="Button">
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="secondary"
                          onClick={this.handleSubmit}
                        >
                          Sign Up
                    </Button>
                    </div>
                    </Grid>
                    <br>
                    </br>
                    <Grid container justify="flex-end">
                        <div className="forgot-password ">
                          <p align="left">
                            Already registered?<a href="http://localhost:3000/signin/">  Sign in</a>
                          </p>
                        </div>
                    </Grid>    
    
                      </div>
                    </div>
                  </form>
                </div>
                <Box mt={2}>
    
                </Box>
              </Container>
            </Card >
          </div>
        );
      }
}



export default Signup;