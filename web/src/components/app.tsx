import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import LazyLoad from '@/components/lazyload';
import history from '@/historys';

function App() {
  return (
    <Router history={history}>
        <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/login" />) } />
            <Route path="/login" component={LazyLoad(React.lazy(()=>import ('@/pages/login'))) } />
            <Route path="/page" component={LazyLoad(React.lazy(()=>import ('@/pages/page'))) } />
        </Switch>
    </Router> 
  );
}

export default App;
