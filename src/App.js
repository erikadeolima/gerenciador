import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Consult from './components/Consult/Consult';
import Edit from './components/Edit/Edit';
import Details from './components/Details/Details';
import SearchResultsCod from './components/SearchResults/SearchResultsCod';
import SearchResultsName from './components/SearchResults/SearchResultsName';

function App() {
  return (
    <div className="app-root">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/registration" component={ Registration } />
        <Route path="/consult" component={ Consult } />
        <Route path="/search-results-cod/:name" component={ SearchResultsName } />
        <Route path="/search-results-name/:id" component={ SearchResultsCod } />
        <Route path="/details/" component={ Details } />
        <Route path="/edit/" component={ Edit } />
      </Switch>
    </div>
  );
}

export default App;
