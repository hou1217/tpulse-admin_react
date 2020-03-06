import React, { Component } from 'react';
import { Form,Button ,Input,Layout} from 'element-react';
import 'element-theme-default';
import loadable from '../../utils/loadable'

// import Platform from '@/components/common/Platform'
// import {mapState,mapMutations} from 'vuex'
// import bus from '@/assets/js/Bus';
// import Header from '@/components/index/Header';
// import Menu from '@/components/index/Menu'
const Header = loadable(() => import(/* webpackChunkName: 'Header' */ '../../components/index/Header'))
// const Menu = loadable(() => import(/* webpackChunkName: 'Header' */ '../../components/index/Menu'))

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      showMenu: process.env.REACT_APP_MENU_POSITION === 'vertical'? true:false,
      collapse: false,
      openStatus:false
      // 角色数组，目前写在前台
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  componentWillUnmount() {
    
  }
  render() { 
    
    return (  
      <div className="wrapper">
       
        <Header />
        
        {/* <Menu mode="vertical" /> */}
       
        <div className="content-box">
          <div className="content">
            
            
            {/* <router-view></router-view> */}
          </div>
        </div>
        
      
      </div>
      
    );
  }
}
 
export default Home;

