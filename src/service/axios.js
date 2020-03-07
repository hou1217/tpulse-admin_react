import axios from 'axios'
const APP_HOST = process.env.REACT_APP_APP_HOST;
// 添加请求拦截器
axios.interceptors.request.use( config => {
  config.headers['WALLAN-TOKEN'] = localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:'';
  return config;
},  error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 全局的 axios 默认值
axios.defaults.baseURL = APP_HOST;

// axios响应拦截器
axios.interceptors.response.use((res) => {
  // console.log(res);
  return res.data;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

export default axios;
