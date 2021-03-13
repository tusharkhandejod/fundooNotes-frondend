import React, { Component } from "react"
import "./forgotPassword.css"
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { forgotPass } from "../../Services/userServices"

class forgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          forgetMsg: "",

          errorValid: {
            email: false,
          },
          errors: {
            email: "",
          },
        };
      }

      change = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

      handleEmailInput = (event) => {
        event.preventDefault();
        this.setState({
          email: event.target.value,
        });
        let errors = this.state.errors;
        let validate = false;
        const regexValidateEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/);
        if (!regexValidateEmail.test(this.state.email)) {
          errors.email = "Email is not valid";
          validate = true;
        } else {
          errors.email = "";
        }
        this.setState({
          errorValid: { email: validate },
          errors: { email: errors.email },
        });
      };

      
      handleSubmit = (event) =>{
        event.preventDefault();
        let errs = {};
        let formIsValid = true;
        this.setState({
          email: "",
        })
        formIsValid = "Msg has been send"
        const errors = this.state.errors;
        if( errors.email || this.state.email == "" ){
          this.setState({
            forgetMsg: true,
            forgetMsg: "Enter valid Email ID"
          });
          formIsValid = false;
          errs["email"] = "Email ID is required";
        }

        let forgotPassData = {
         "email" : this.state.email,
        }
        console.log('forgotPassData : ',forgotPassData)
        forgotPass(forgotPassData).then((data)=>{
          console.log(data);
          alert('Reset link has been send to your Email account kindly check')
        })
        .catch ((error)=>{
          console.log(error)
        })
          
        
      }

render(){
    return(
        <div className="wrapper-tool">
            <Card id='form'>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <br>
                </br>
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
              <span>Find your email</span>
              </Typography>
              <Typography component="h1" variant="h5" className="head">
              <span><h6>Enter your phone number or recovery email</h6></span>
              </Typography>
              <form className="form">
              <Grid>
              <Grid>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="emailOrNumber"
                      label="Enter phone number or email :"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={this.handleEmailInput}
                      
                    />
                  </Grid>
                  
              </Grid>
              <br>
              </br>
              <Grid>
                  <Grid>
                  <Link href="" color="textPrimary" >
                  <Button 
                     variant="contained" 
                     color="primary"
                     onClick={this.handleSubmit}>
                      Reset password
                  </Button>
                  </Link>
                  </Grid>
                </Grid>
              </form>

            </div>
            </Container>
            </Card>
        </div>
    );
}

}
export default forgotPassword;