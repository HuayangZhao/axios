<template>
    <div class="userList">
    <el-table
            :header-cell-style="tableHeaderColor"
            :data="users"
            border
            style="width: 100%">
        <el-table-column
                align="center"
                :formatter="dateFormat"
                prop="create_time"
                label="时间"
                width="180">
        </el-table-column>
        <el-table-column
                align="center"
                prop="username"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                align="center"
                prop="mobile"
                label="电话">
        </el-table-column>
        <el-table-column
                align="center"
                prop="role_name"
                label="角色">
        </el-table-column>
        <el-table-column
                align="center"
                prop="mg_state"
                label="状态">
            <template slot-scope="scope">
                <el-button size="mini" :type="scope.row.mg_state ? 'success' : 'danger'" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.mg_state ?"开放":"禁用"}}</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
    // 格式化时间
    import moment from 'moment'
    import axios from 'axios'
    export default {
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
                users:[],
                pagenum:1,
                pagesize:10
            }
        },
        mounted(){
            this.getUserList()
        },
        methods:{
            getUserList(){
                let token = localStorage.getItem('itcast')
                // 设置请求头信息 为了携带token ,Authorization名称是后台定义好的

                // axios.get('http://127.0.0.1:8888/api/private/v1/users?pagenum=1&pagesize=10')
                axios.get('http://127.0.0.1:8888/api/private/v1/users',{
                    headers: { "Authorization":token },
                    params:{
                        pagenum:this.pagenum,
                        pagesize:this.pagesize
                    }
                }).then(res=>{
                    // console.log(res);
                    if(res.data.meta.status == 200){
                        this.users = res.data.data.users
                    }
                })
            },
            // 格式化时间
            dateFormat(row, column){
                let date = row[column.property];
                if (date === undefined) {
                    return "";
                }
                return moment(date).format("YYYY-MM-DD");
            },
            // 改变表头背景色及文字颜色
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'background-color: #409EFF;color: #fff;'
                }
            },
        }
    }
</script>

<style scoped>
    .has-gutter{
    text-align: center;
}
</style>