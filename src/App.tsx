import React from 'react';
import Home from './components/home/Home'
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import { HOME } from './route/Routes';

import './App.css';

function App() {

  return (
    <BrowserRouter> 
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path={HOME}>
              <Home/>
            </Route>
            <Route path={"/1"}>
              <div />
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App;
