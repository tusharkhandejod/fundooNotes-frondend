import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
 import Signin from './pages/SignIn/SignIn';
 import Signup from './pages/SignUp/signup'
 import forgotPassword from './pages/Forgot-Password/forgotPassword'
 import resetPassword from './pages/Reset-Password/ResetPassword'
 import DashBoard from './components/DashBoard/DashBoard'
import dashboard from './components/DashBoard/DashBoard';




function App() {

  return (
    
    <div className="App">
     
       <Router>
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup"  component={Signup} /> 
          <Route path="/forgotPassword"  component={forgotPassword} /> 
          <Route path="/ResetPassword/:token"  component={resetPassword} />
          <Route path="/dashboard"  component={ dashboard } />
          

        </Switch>
      </Router>   
    </div>
    
     
  
  );
}

export default App;
