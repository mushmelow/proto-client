import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import SignIn from "./components/pages/SignIn";

const App =() =>(
<div className="ui container">
  <Route path="/" exact component= {HomePage} />
  <Route path="/signin" exact component= {SignIn}/>
</div>
);

export default App;
