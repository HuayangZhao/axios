1.完成登录页面 利用定位然后上下左右都给0像素让登录窗口一直居中。
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
3.使用elementUI构建主页。