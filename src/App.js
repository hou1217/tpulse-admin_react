import React from 'react';
import 'element-theme-default';
import { BrowserRouter  as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'
import './style/App.css';
// import RouterMap from '@/router';
// import '@/assets/css/common.scss';
// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/Others/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))
const Home = loadable(() => import(/* webpackChunkName: 'Home' */ './views/index/Home'))

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/login' />} />
        <Route path='/500' component={View500} />
        <Route path='/404' component={View404} />
        <Route path='/login' component={Login} />
        <Route path="/home" component={Home}/>
        <Route component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App;
