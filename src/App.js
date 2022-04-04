import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AddDealForm } from './components/AddDealForm';
import { DealsList } from './components/DealsList';
import { DealPage } from './components/DealPage';

import './style/index.css';

function App() {
  return (
    <Router>
      <section className="my-5">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <AddDealForm {...props} />
                <DealsList />
              </>
            )}
          />
          <Route exact path="/deals/:dealId" component={DealPage} />
          <Redirect to="/" />
        </Switch>
      </section>
    </Router>
  )
}

export default App;
