<template>
    <div class="login">
        <el-form  label-width="80px" class="loginForm">
            <div class="loginImg">
                登&nbsp;录
            </div>
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password" type="password" @keyup.enter="clickLogin"></el-input>
            </el-form-item>
            <el-form-item >
                 <el-button type="primary"  class="loginButton" @click="clickLogin">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// 导入axios
import axios from "axios"
export default {
    data(){
        return{
                username: '',
                password: ''
        } 
    },
    methods:{
       clickLogin(){
           axios.post('http://127.0.0.1:8888/api/private/v1/login',{
               username:this.username,
               password:this.password
           })
           .then(res=>{
               console.log(res)
               if(res.data.meta.status==200){
                   localStorage.setItem('itcast',res.data.data.token)
                    this.$message({
                        message: '恭喜你，登录成功！',
                        type: 'success'
                    });
                   this.$router.push('/index')
               }else {
                   this.$message.error('账号或密码输入错误，请重试！');
               }
           })
       } 
    }
}
</script>
<style lang="less">
.login {
    .loginForm {
        min-width: 320px;
        max-width: 500px;
        padding: 0 40px 0 20px;
        height: 300px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        .loginImg{
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 1px solid #ccc;
            z-index: 3;
            left: 50%;
            margin-left: -20px;
            transform: translateY(-120%);
            line-height:80px;
            text-align: center;
            background-color: #409EFF;
            color: #fff;
        }
        .loginButton{
            width: 100%;
        }
    }
}
</style>
