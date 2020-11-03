import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'


const App = () => {
  return (
    <>
      <Router>

        <button><Link to="/">Home</Link></button>
        <button><Link to="/login">Login</Link></button>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App
