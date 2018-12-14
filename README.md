1.完成登录页面 利用定位然后上下左右都给0像素让登录窗口一直居中。当想在密码框输入完毕回车就登录的时候，发现绑定后无效，
原来element中的事件不支持原生，只支持自己有的，想要用原生的需要加上 `.native`,@keyup.enter.native="clickLogin"<br/>
2.导入数据库，开启后台服务器链接数据库，登录账户：admin  密码：123456。
```
	//default.json
	"db_config" : {
		"protocol" : "mysql",
		"host" : "127.0.0.1",
		"database" : "itcast",
		"user" : "root",
		"password" : "root",
		"port" : 3306	
	}
```
3.使用elementUI构建主页，设置默认加载选中用户列表项<br/>
4.在index路由中构建用户列表子路由，并设置主页重定向到用户列表<br/>
5.绘制表格，element中设置表格表头样式要用 header-cell-style
```
<el-table
    :header-cell-style="tableHeaderColor"
    :data="users"
    border
    style="width: 100%">


methods:{
    // 改变表头背景色及文字颜色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
            return 'background-color: #409EFF;color: #fff;'
        }
    }
}
```
6.使用moment.js格式化时间，element中格式化需要用formatter
```
<el-table-column
    align="center"
    :formatter="dateFormat"
    prop="create_time"
    label="时间"
    width="180">


methods:{
    // 格式化时间
    dateFormat(row, column){
        let date = row[column.property];
        if (date === undefined) {
            return "";
        }
        return moment(date).format("YYYY-MM-DD");
    },
}
```
7.人物状态是布尔值，无法被渲染出来，这时候需要借鉴element文档其余列表
```
 <template slot-scope="scope">
    <el-button
      size="mini"
      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
    <el-button
      size="mini"
      type="danger"
      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
 </template>
```
通过 @click="handleEdit(scope.$index, scope.row)"事件打印
```
methods:{
    handleEdit(index, row){
        console.log(index, row)
    }
}
//结果
//index为点击行的索引
//row为对象，里面存放此行的用户信息
//根据scope.row中用户的状态来渲染想要的页面
```
8.Axios模块化.把所有请求抽离到一个模块中用export导出方便维护<br/>
9.设置axios拦截器，每次请求都需要从本地获取token，然后设置请求头，比较麻烦，可以统一交给拦截器来做，每次发送请求前先把这些事情做了再发送<br/>
10.设置导航守卫，如果不是登录状态，禁止直接访问列表页，如果是登录状态，禁止访问登录页。设置导航守卫时进入死循环，如下：
```
// 路由全局守卫
router.beforeEach((to, from, next) => {
  // 根据本地有没有token去判断用户登录了没有
  let token  = localStorage.getItem("itcast")
  if(!token){
    // 如果没有token 直接结束掉 并跳转到登录页
    next({path:'/login'})
    return
  }
// 不要忘了调用next方法  
  next()
})
```
这里逻辑貌似没什么问题，就一直报错，而且还不知道是什么错误，其实已经陷入了死循环，没有token代表没有登录，就会跳转到登录页，但跳转之前又得判断token，一直循环，需要更改判断条件`(!token && to.path!=="/login") `