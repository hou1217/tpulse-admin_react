import React from 'react';
import {Form,Card,Input,Button,message} from 'antd';

const Edit = (props) => {
  const {getFieldDecorator} = props.form
  const priceValidate = (rule,value,callback)=>{
    if(value*1>200){
      callback('价格不能大于200')
    }else{
      callback()
    }
  }
  const handleSubmit = e=>{
    console.log(e);
    e.preventDefault();
    props.form.validateFieldsAndScroll((err,values)=>{
      if(!err){
        console.log(values);
        console.log('提交');
        // api
      }else{
        message.error('请正确输入内容！')
      }
    })
  }
  return (  
    <Card title="商品编辑">
      <Form onSubmit={e=>handleSubmit(e)}>
        <Form.Item label="名字">
        {
          getFieldDecorator("name",{
            rules:[
              {
                required:true,
                message:"请输入商品名字"
              }
              
            ]
          })(<Input placeholder="请输入商品名称"></Input>)
        }
          
        </Form.Item>
        <Form.Item label="价格">
        {
          getFieldDecorator("price",{
            rules:[
              {
                required:true,
                message:"请输入商品价格"
              },
              {
                validator:priceValidate
              }
            ]
          })(<Input placeholder="请输入商品价格"></Input>)
        }
          
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">保存</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
 
export default Form.create({name:'ProductEdit'})(Edit);