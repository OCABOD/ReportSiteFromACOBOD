import React from 'react';
import Home from './components/home/Home'
import Employee from './components/employee/Employee'
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import { EMPLOYEE, HOME } from './route/Routes';

import './App.css';

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
          </Switch>
          </div>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App;
