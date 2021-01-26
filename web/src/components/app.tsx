import React from 'react';
import { RecoilRoot } from 'recoil';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import LazyLoad from '@/components/lazyload';
import history from '@/historys';

function App() {
  return (
    <RecoilRoot>
      <Router history={history}>
          <Switch>
              <Route exact path="/" render={ () => (<Redirect to="/page" />) } />
              <Route path="/login" component={LazyLoad(React.lazy(()=>import ('@/pages/login'))) } />
              <Route path="/page" component={LazyLoad(React.lazy(()=>import ('@/pages/page'))) } />
          </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
