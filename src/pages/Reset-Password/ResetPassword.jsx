import React, { Component } from "react"
import "./ResetPassword.css"
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { resetPass } from "../../Services/userServices"


class ResetPassword extends Component{


    constructor(props) {
        super(props);
        this.state = {
        password1: "",
        password1Error: "",
        password1Flag: false,
        password2: "",
        password2Error: "",
        password2Flag: false,
        setOpen: false,
        open: false,
        token:this.props.match.params.token, 
        
    };
}

token=this.props.match.params.token;

change = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
};

validate = () => {
    let isError = false;
    const errors = {
        password1Error: "",
        password1Flag: false,
        password2Error: "",
        password2Flag: false,
    };

    if (this.state.password1.length == 0) {
        errors.password1Flag = true;
        
        isError = true;
        errors.password1Error = "Enter Password";
    }

    if (this.state.password2 != this.state.password1 ) {
        errors.password2Flag = true;
        isError = true;
        errors.password2Error = "Passwords didn't match.";
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
            password1: "",
            password1Error: "",
            password1Flag: false,
            password2: "",
            password2Error: "",
            password2Flag: false,
            
        });

        let resetPasswordData = {

            newPass: this.state.password1,

        };
        console.log(this.state.token)
        console.log(resetPasswordData)
        
        resetPass (resetPasswordData, this.state.token).then((data)=>{
          console.log(JSON.stringify(data));
        

        })
        .catch ((error)=>{
          console.log(error)
         
        })
    }
};

    

   

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
              <span><h6>Resetting the password for </h6></span>
              </Typography>
              <form className="form">
              <Grid>
              <Grid>
                  <br>
                  </br>
                  <br>
                  </br>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password1"
                      label="Enter your new password:"
                      name="password1"
                      autoComplete="password1"
                      value={this.state.password1}
                      error={this.state.password1Flag}
                      onChange={(e)=> this.change(e)}
                      helperText={this.state.password1Error}
                    />
                    
                  </Grid>
                  
              </Grid>
              <br>
              </br>
              <Grid>
              <Grid>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      type="text"
                      id="password2"
                      label="Enter your confirm password :"
                      name="password2"
                      autoComplete="password2"
                      value={this.state.password2}
                      error={this.state.password2Flag}
                      onChange={(e)=> this.change(e)}
                      helperText={this.state.password2Error}
                      
                     />
                     
                </Grid>
                  
              </Grid>
              <br>
              </br>
              <Grid>
                  <Grid>
                  <Link href="" color="textPrimary" >
                  <Button 
                  type="submit"
                  fullWidth
                  variant="contained" 
                  color="primary"
                  onClick={this.onSubmit}>
                      Submit
                  </Button>
                  </Link>
                  </Grid>
                </Grid>
              </form>
                </div>
                </Container>
                </Card>
            </div>
        )
    }
}

export default ResetPassword;