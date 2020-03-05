import React, { Component } from 'react';
// import {Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { Form,Button ,Input,Layout} from 'element-react';
import 'element-theme-default';
// import { withRouter } from 'react-router-dom'
import '@/style/view-style/login.scss'
import LoginApi from '@/service/login'

const md5 = require('md5');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      loading: false,
      userForm: {
        appId: "tpulse",
        phoneNum: '',
        password: ''
      }
    }
  }
  enterLoading = () => {
    this.setState({
      loading: true
    })
  }
  onChange(key, value) {
    this.state.userForm[key] = value;
    this.forceUpdate();
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.userForm);
    
    //调用登陆接口
    LoginApi.loginPhone(Object.assign({},this.state.userForm,{password:md5(this.state.userForm.password)}))
    .then((res) => {
      console.log('登陆成功');
      // this.toastData.msg = '登陆成功';
      // this.toastVisible = true;
      console.log(res);
      this.props.history.push('home')
      // this.$router.push({
      //   path: '/home'
      // });
    })
    .catch((err)=>{
      console.error('数据异常：', err);
      this.toastData.msg = err.msg ? err.msg : '登陆失败';
      this.toastVisible = true;
    });
      
    
  }
  
  componentDidMount(){
    // notification.open({
    //   message: '欢迎使用后台管理平台',
    //   duration: null,
    //   description: '账号 admin 密码随意'
    // })
    console.log(this.props);
  }
  componentWillUnmount() {
    // notification.destroy()
    // this.timer && clearTimeout(this.timer)
  }
  render() { 
    // const { getFieldDecorator } = this.props.form
    return (  
      
      <div className='login'>
        <div className='model'>
          <div className='login-form'>
            <h3>后台管理系统</h3>
            
            <Form model={this.state.userForm} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
              <Form.Item label="手机号">
                <Input value={this.state.userForm.phoneNum} onChange={this.onChange.bind(this, 'phoneNum')}></Input>
              </Form.Item>
              <Form.Item label="密码">
                <Input value={this.state.userForm.password} onChange={this.onChange.bind(this, 'password')}></Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary" nativeType="onSubmit">登陆</Button>
                <Button>取消</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Login;