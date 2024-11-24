import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelfAssessmentForm from './components/SelfAssessmentForm';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/assessment" component={SelfAssessmentForm} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </Router>
  );
}

export default App;
