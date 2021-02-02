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
              <Route exact path="/" render={ () => (<Redirect to="/admin" />) } />
              <Route path="/login" component={LazyLoad(React.lazy(()=>import ('@/pages/login'))) } />
              <Route path="/admin" component={LazyLoad(React.lazy(()=>import ('@/pages/admin'))) } />
              <Route path="/workbench" component={LazyLoad(React.lazy(()=>import ('@/pages/workbench'))) } />
              <Route path="/webdesign" component={LazyLoad(React.lazy(()=>import ('@/pages/webdesign'))) } />
          </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
