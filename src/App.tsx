import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Devis } from "./components/devis/devis";
import { Home } from "./components/home/home";
import { Pdf } from "./components/pdf/pdf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/devis'>
              <Devis />
            </Route>
            <Route exact path='/pdf'>
              <Pdf />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
