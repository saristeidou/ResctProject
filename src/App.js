import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import CarDetails from './components/cars/CarDetails'
import Login from './components/auth/Login'
import Signup from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/cars/:id' component={CarDetails}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
