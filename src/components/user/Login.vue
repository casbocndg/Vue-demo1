<template>
  <div class="b">
  <div class="a">
    <el-form ref="form"  label-width="80px">
      <h1 align="center">欢迎登录</h1>
      <el-form-item label="用户名：">
        <el-input type="text" v-model="userName"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="open2" v-on:click="doLogin()" >登录</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button v-on:click="doRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          userName:"",
          password:""
        }
      },
    methods: {
      doRegister () {
        this.$router.push('/register')
      },
      // dLogin () {
      //   this.$router.push('/')
      // },
      open2() {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      },
      doLogin(){
        // this.$http.get('http://localhost:8080/doLogin',
        //   {params:{"userName":this.userName,"password":this.password}}).then(
        //     function(res) {
        //       alert("登录状态：" + res.body);
        //       document.write(res.body); },
        //   function(){
        //       console.log('请求失败处理');
        //     });

        this.$http.post('http://localhost:8888/doLogin',
          {"userName":this.userName,"password":this.password},{emulateJSON:true}).then(function(res){
          alert("登录成功！");
          //  this.$message.success("欢迎登录！");
          //document.write(res.body);
          this.$router.push("/");
        },function(res){
          alert("登录失败！");
          console.log(res.status);
        });



      }

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
