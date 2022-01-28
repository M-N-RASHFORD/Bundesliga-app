import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Players from './Components/Players';
import Teams from './Components/Teams';
import TopScorers from './Components/Statistics';
import Table from './Components/Table';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <top>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/teams">Teams</Link>
              <Link to="/players">Players</Link>
              <Link to="/statistics">Statistics</Link>
              <Link to="/table">Table</Link>
            </nav>
          </top>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/teams" component={Teams}/>
          <Route path="/players" component={Players}/>
          <Route path="/statistics" component={TopScorers}/>
          <Route path="/table" component={Table}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
