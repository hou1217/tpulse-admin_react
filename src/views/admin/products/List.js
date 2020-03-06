import React from 'react';
import {Card,Table,Button,Popconfirm} from 'antd'
const dataSource = [
  {
    id:1,
    name:'111',
    price:100
  },
  {
    id:2,
    name:'221',
    price:200
  },
  {
    id:3,
    name:'331',
    price:300
  }
]
const List = (props) => {
  const columns = [{
    title:"序號",
    key:'id',
    width:80,
    align:'center',
    render:(txt,record,index) => index + 1
  },{
    title:'名字',
    dataIndex:'name'
  },{
    title:'價格',
    dataIndex:'price'
  },{
    title:'操作',
    render:(txt,record,index)=>{
      return(
        <div>
          <Button type="primary" size="small">修改</Button>
          <Popconfirm 
            title="确定删除吗？" 
            onConfirm={()=>{
              console.log("确认删除");
              // api
            }}
            onCancel={()=>console.log("取消删除")} >
            <Button style={{margin:'0 1rem'}} type="danger" size="small">刪除</Button>
          </Popconfirm>
        </div>
      )
    }
  }]
  return (  
    <Card title="商品列表" extra={
      <Button 
        type="primary" 
        size="small" 
        onClick={()=>props.history.push("/admin/products/edit")}
      >
        新增
      </Button>
    }>
      <Table rowKey="id" columns={columns} bordered dataSource={dataSource}> 

      </Table>
    </Card>

  );
}
 
export default List;