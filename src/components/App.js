import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Callback from '../container/auth/Callback';
import { withSession } from '../container/auth/withSession';
import NoteById from '../container/notes/NoteById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route path="/callback" component={Callback} />
        <Route path="/:id" component={withSession(NoteById)} />
      </Switch>
    </Router>
  );
}
