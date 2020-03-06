import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,message,Card,notification,Layout,Divider,Icon } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '@/style/view-style/login.scss'
import {setToken} from '@/utils/auth'

const Login = (props) => {
  const {getFieldDecorator} = props.form
  const handleSubmit = e=>{
    console.log(e);
    e.preventDefault();
    props.form.validateFieldsAndScroll((err,values)=>{
      if(!err){
        console.log(values);
        console.log('提交');
        // api
        setToken(values.username);
        props.history.push("/admin")
      }else{
        message.error('请正确输入内容！')
      }
    })
  }

  return (  
    <Layout className='login'>
      <div className="model">
        <Card title="后台管理系统"   className="login-form">
          <Form
          
            onSubmit={e=>handleSubmit(e)}>
            <Form.Item
              name="username"
            >
            {
              getFieldDecorator("username",{
                rules:[
                  {
                    required:true,
                    message:"请输入用户名"
                  }
                  
                ]
              })(<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"></Input>)
            }
              
            </Form.Item>
            <Form.Item
              name="password"
              
            >
            {
              getFieldDecorator("password",{
                rules:[
                  {
                    required:true,
                    message:"请输入密码"
                  }
                  
                ]
              })(<Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"></Input>)
            }
            
            </Form.Item>
            <Form.Item>
              

              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              
            </Form.Item>
          </Form>
        </Card>
      </div>
      
    </Layout>
  );
}
 
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  
//       loading: false
//     }
//   }
//   enterLoading = () => {
//     this.setState({
//       loading: true
//     })
//   }
//   handleSubmit = e => {
//     e.preventDefault();
    
//   }
  
//   componentDidMount(){
//     notification.open({
//       message: '欢迎使用后台管理平台',
//       duration: null,
//       description: '账号 admin 密码随意'
//     })
//     console.log(this.props);
//   }
//   componentWillUnmount() {
//     notification.destroy()
//     // this.timer && clearTimeout(this.timer)
//   }
//   render() { 
//     const { getFieldDecorator } = this.props.form
//     return (  
//       <Layout className='login'>
//         <div className='model'>
//           <div className='login-form'>
//             <h3>后台管理系统</h3>
//             <Divider />
//             <Form onSubmit={this.handleSubmit}>
//               <Form.Item>
//                   {getFieldDecorator('username', {
//                       rules: [{ required: true, message: '请输入用户名!' }]
//                   })(
//                       <Input
//                           prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
//                           placeholder='用户名'
//                       />
//                   )}
//               </Form.Item>
//               <Form.Item>
//                   {getFieldDecorator('password', {
//                       rules: [{ required: true, message: '请输入密码' }]
//                   })(
//                       <Input
//                           prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
//                           type='password'
//                           placeholder='密码'
//                       />
//                   )}
//               </Form.Item>
//               <Form.Item>
//                   <Button
//                       type='primary'
//                       htmlType='submit'
//                       className='login-form-button'
//                       loading={this.state.loading}>
//                       登录
//                   </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
 
export default Form.create({name:"loginForm"})(Login);