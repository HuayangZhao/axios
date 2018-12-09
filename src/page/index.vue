<template>
    <div class="indexContainer"> 
     <el-col :span="4">
        <el-menu :default-active="activeName" @select="handleSelect" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户信息</span>
                </template>
                <el-menu-item index="1-1">用户列表</el-menu-item>
                <el-menu-item index="1-2">用户详情</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>角色信息</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-info"></i>
                    <span>商品信息</span>
                </template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>权限信息</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-col>
    <el-col :span="20" class="users">
        <router-view></router-view>
    </el-col>

    </div>
</template>
<script>
  export default {
    data() {
        return {
        activeName: '1-1'
        };
    },
    methods: {
        // 设置选中菜单时调用函数
        handleSelect(key,index){
            console.log(key, index);
            switch (index) {
                case '1-1':
                    // 跳转到用户列表
                this.$router.push('/index/userList')
                break;
            }

        }
    }
  }
</script>
<style lang="less">
.el-menu-vertical-demo{
    min-width: 160px;
    .el-submenu .el-menu-item {
        min-width: 10px;
    }
}
    .users{
        padding: 50px;
    }
</style>
