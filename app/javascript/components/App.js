import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './Test';
import Post from './posts/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/test" component={Test} />
          //TODO replace with Post route //<Route
            exact
            path="/test"
            component={Test}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
