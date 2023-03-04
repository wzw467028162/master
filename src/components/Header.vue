<template>
  <div class="header-container">
    <div class="l-container">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.keyPath }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-container">
      <el-dropdown>
        <img class="user" src="../assets/user.png" alt="" />

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed:{
    ...mapState({
        tags: state => state.tab.tabsList
    })
  },

};
</script>

<style lang="less" scoped>
.header-container {
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-container {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-container {
    display: flex;
    align-items: center;
    .el-breadcrumb {
        padding-left: 20px;
    }
    /deep/.el-breadcrumb__item {
        font-weight: normal;
        .el-breadcrumb__inner {
            &.is-link {
                color: #666;
            }
        }
        &:last-child {
            .el-breadcrumb__inner{
                color: #fff;
            }
        }
    }
  }

}
</style>