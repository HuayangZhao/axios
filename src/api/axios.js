import  axios from "axios"
// 全局配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1';
// axios拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config就是请求配置对象 官方文档上有
    let token = localStorage.getItem('itcast')
    // 如果有token存在代表是登录状态就发送token
    if(token){
        config.headers.Authorization = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 登录请求
export const login = (username, password)=>axios.post('login',{username, password})
// 获取用户列表
export const getList = (pagenum,pagesize)=>axios.get('users', {params:{pagenum, pagesize}})