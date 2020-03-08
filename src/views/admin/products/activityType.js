import React ,{useEffect,useState}from 'react';
import {Card,Table,Button,Popconfirm} from 'antd'
import rightsApi from '@/service/rights'
import './list.css'
// const dataSource = [
//   {
//     id:1,
//     name:'111',
//     price:100
//   },
//   {
//     id:2,
//     name:'221',
//     price:200
//   },
//   {
//     id:3,
//     name:'331',
//     price:300
//   }
// ]
const List = (props) => {
  const [dataSource,setDataSource] = useState([])
  const [total,setTotal] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)

  const loadData = (page,pageSize)=>{
    console.log(pageSize);
    rightsApi.getActivityType({page:page, pageSize: pageSize})
    .then(res=>{
      console.log(res);
      setDataSource(res.data.data)
      setTotal(res.data.total)
      setCurrentPage(page)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    rightsApi.getActivityType({page: 1, pageSize: 5})
    .then(res=>{
      console.log(res);
      setDataSource(res.data.data)
      setTotal(res.data.total)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  const columns = [{
    title:"序号",
    key:'id',
    width:80,
    align:'center',
    render:(txt,record,index) => index + 1
  },{
    title:'名字',
    dataIndex:'name'
  },{
    title:'模板数量',
    dataIndex:'templateCount'
  },{
    title:'上下架状态',
    dataIndex:'state',
    render:(txt,record)=>{
      return record.state==='ACTIVE'?'是':'否'
    }
  },{
    title:'操作',
    render:(txt,record,index)=>{
      return(
        <div>
          <Button type="primary" size="small" onClick={()=>{
            // 跳转页面
            console.log(record);
            props.history.push(`/admin/products/edit/${record.id}`)
          }}>修改</Button>
          <Popconfirm 
            title="确定删除吗？" 
            onConfirm={()=>{
              console.log("确认删除");
              // api
              rightsApi.deleteRole({
                id:record.id
              })
              .then(res=>{
                console.log(res);
                loadData(currentPage,2)
              })
              .catch(err=>{
                console.log(err);
              })
            }}
            onCancel={()=>console.log("取消删除")} >
            <Button style={{margin:'0 1rem'}} type="danger" size="small">刪除</Button>
          </Popconfirm>
        </div>
      )
    }
  }]
  return (  
    <Card title="活动类型" extra={
      <Button 
        type="primary" 
        size="small" 
        onClick={()=>props.history.push("/admin/activity/edit")}
      >
        新增
      </Button>
    }>
      <Table 
        rowKey="id"
        rowClassName={record=>record.state?"":"bg-red"}
        pagination={{
          total,defaultPageSize:5,onChange:loadData
        }}
        columns={columns} 
        bordered 
        dataSource={dataSource}> 
      </Table>
    </Card>

  );
}
 
export default List;