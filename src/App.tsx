import React, { useEffect } from 'react';
import Home from './components/home/Home'
import Employee from './components/employee/Employee'
import Profile from './components/profile/Profile'
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import { EMPLOYEE, HOME, PROFILE, ADMIN } from './route/Routes';

import './App.css';
import { AddTestUsers } from './axios/users';
import Admin from './components/Admin/Admin';

function App() {

  return (
    <BrowserRouter> 
      <div className="App">
        <Layout>
          <div className="content-content">
          <Switch>
            <Route exact path={HOME}>
              <Home/>
            </Route>
            <Route path={EMPLOYEE}>
              <Employee />
            </Route>
            <Route path={PROFILE} component={Profile}/>
            <Route path={ADMIN}>
              <Admin/>
            </Route>
          </Switch>
          </div>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App;
