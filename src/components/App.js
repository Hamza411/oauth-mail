import React from 'react';
// import GoogleAuth from './GoogleAuth';
import { Router, Route, Switch } from "react-router-dom";
import MailCreate from './Mails/MailCreate';
import MailList from './Mails/MailList';
import history from '../history';
import MailShow from './Mails/MailShow';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={MailList} />
        <Route path="/mails/new" component={MailCreate} />
        <Route path="/mails/:id" component={MailShow} />
      </Switch>
    </Router>
  );
};

export default App;