<template>
 <div>
   <el-container>

     <el-header>
       <el-menu
         :default-active="activeIndex2"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b">
         <el-menu-item index="1">处理中心</el-menu-item>
         <el-submenu index="2">
           <template slot="title">我的工作台</template>
           <el-menu-item index="2-1">选项1</el-menu-item>
           <el-menu-item index="2-2">选项2</el-menu-item>
           <el-menu-item index="2-3">选项3</el-menu-item>
           <el-submenu index="2-4">
             <template slot="title">选项4</template>
             <el-menu-item index="2-4-1">选项1</el-menu-item>
             <el-menu-item index="2-4-2">选项2</el-menu-item>
             <el-menu-item index="2-4-3">选项3</el-menu-item>
           </el-submenu>
         </el-submenu>
         <el-menu-item index="3" disabled>消息中心</el-menu-item>
         <el-menu-item index="4"><a href="https://www.ele.me" target="_self">订单管理</a></el-menu-item>
         <el-button type="info" v-on:click="doLogin" size="small">登录 | 注册</el-button>
         <el-menu-item index="4"><a href="http://localhost:8088/#/person" target="_self">个人信息</a></el-menu-item>
         </el-submenu>
       </el-menu>
     </el-header>

     <el-container>
       <el-aside width="200px">

       </el-aside>

       <el-main>
         Main
       </el-main>
     </el-container>
   </el-container>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
      doLogin () {
        this.$router.push('/login')
      },
      }

  }
</script>

<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
     background-color: #E9EEF3;
     color: #333;
     text-align: center;
     line-height: 160px;
   }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
</style>
