import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import loadable from './utils/loadable'
import {Button} from 'antd';
import './style/App.css';
import {adminRoutes} from './routes'
// 公共模块
// const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))
import Frame from './components/frame'
import {isLogin} from './utils/auth'
// 基础页面

function App() {
  
  return (isLogin()?
    <Frame>
      <Switch>
        {adminRoutes.map(route=>{
          if (route.children && route.children.length && !route.hideChildren) {
            return(
              route.children.map(item=>{
                return(
                  <Route 
                    key={item.path} 
                    path={item.path}
                    exact={item.exact}
                    render={itemProps=>{
                      return <item.component {...itemProps}/>
                    }}>
                  </Route>
                )
                
              })
            ) 
          }else{
            return(
              <Route 
                key={route.path} 
                path={route.path}
                exact={route.exact}
                render={routeProps=>{
                  return <route.component {...routeProps}/>
                }}>
              </Route>
            )
          }
        })}
        <Redirect to={adminRoutes[0].path} from="/admin"></Redirect>
        <Redirect to="/404"></Redirect>

      </Switch>
    </Frame>: <Redirect to="/login"></Redirect>
  );
}

export default App;
