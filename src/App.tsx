import React from 'react';
import Home from './components/home/Home'
import './App.css';
import Layout from './components/layout/Layout';

function App() {

  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  )
}

export default App;
