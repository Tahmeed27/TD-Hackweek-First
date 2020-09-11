import React from 'react';
import Hero from './components/Hero'
import Recipes from './components/Recipes'

import classes from './App.module.css';
function App() {
  return (
    <div className={classes.root}>
      <Hero />
      <Recipes />
    </div>
  );
}

export default App;
