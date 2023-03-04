<template>
  <div>
    <el-container>
      <el-aside width="auto">
           <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
            <Header />
        </el-header>
            <Tag></Tag>
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Tag from '@/components/Tag'
import Aside from '../components/Aside.vue'
import Header from '@/components/Header'
export default {
    components:{
        Aside,
        Header,
        Tag
    }
        
    
}
  
</script>

<style lang="less" scoped>
 .el-header {
    padding: 0;
 }
</style>