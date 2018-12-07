<template>
    <div class="login">
        <el-form :model="form" label-width="80px" class="loginForm">
            <div class="loginImg">
                登&nbsp;录
            </div>
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item >
                 <el-button type="primary" native-type="submit" class="loginButton">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
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
