import React from 'react';
// import GoogleAuth from './GoogleAuth';
import { Router, Route, Switch } from "react-router-dom";
import MailCreate from './Mails/MailCreate';
import MailList from './Mails/MailList';
import history from '../history';
import MailShow from './Mails/MailShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={MailList} />
          <Route path="/mails/new" component={MailCreate} />
          <Route path="/mails/:id" component={MailShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;