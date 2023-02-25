<template>
  <div>
    <el-row>
        <el-col :span="8">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../assets/user.png" alt="">  
                    <div class="userinfo">
                        <p class="username">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                    <div class="login-info">
                        <p>
                            上次登录时间 <span>2023-2-24</span>
                        </p>
                        <p>
                            上次登录地点 <span>合肥</span>
                        </p>
                    </div>
            </el-card>
            
        </el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.user {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
    } 
    .userinfo{
       .username {
            font-size: 32px;
            margin-bottom: 10px;
       }
       .access {
        color: #999999;
       }
        
    }
} 
.login-info {
    
    p {
        font-size: 14px;
        line-height: 28px;
        color: #999999;
    }
    span {
        margin-left: 60px;
        font-size: 12px;
        color: #666666;
    }
}



</style>