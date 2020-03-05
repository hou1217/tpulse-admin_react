import React, { Component } from 'react';
import './Header.css';
// import bus from '@/assets/js/Bus';
// import UserPanel from '@/components/user/widget/UserPanel'
// import Menu from '@/components/index/Menu';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse: false,
      fullscreen: false,
      name: 'linxin',
      message: 2
    }
  }
  collapseChage(v){
    console.log(v);
  }
  render() { 
    return (
      <div className="header">
     
        <div className="collapse-btn" onClick={this.collapseChage.bind(this,'showMenu')}>
          <i className="el-icon-menu"></i>
        </div>
        <div className="logo">tpulse管理后台</div>
      
        {/* <Menu/> */}
        {/* <div className="header-right">
          <user-panel></user-panel>
        </div> */}
      </div>  
    );
  }
}
 
export default Header;

