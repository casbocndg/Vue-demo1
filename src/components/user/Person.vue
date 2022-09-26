<template>
 <div class="b">
   <div class="a">
     <h1 align="center">个人主页</h1>
     <div>
       <h2>个人信息：</h2>
       <h3>用户名: {{this.$route.query.userName}}</h3>
       <h3>邮&nbsp;&nbsp;&nbsp;箱: {{this.$route.query.e_mile}}</h3>
     </div>
     <div align="center">
       <br><br><br><br><br>
       <el-button type="primary" @click="doLogin" >返回主页</el-button>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "Person",

      methods:{
        doLogin () {
          this.$router.push('/')
        },
      }

    }
</script>

<style scoped>
  .a{
    height: 250px;
    width: 350px;
    margin: 50px auto;
  }
  .b{
    background: url("../../imgs/youla2k.jpg");
    height: 100%;
    width: 100%;
    position:fixed;
    background-size:100% 100%;
    blur:10px;
  }
</style>
