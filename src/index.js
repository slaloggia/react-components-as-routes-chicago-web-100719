import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './Home'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => (
  <div>
    <NavLink to="/" exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
  </div>
)



const About =() => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login =() => {
  return (
    <div>
      <br></br>
      <br></br>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render((
<Router>
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </div>
</Router>),
  document.getElementById('root')
);
