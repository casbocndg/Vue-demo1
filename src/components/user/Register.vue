<template>
  <div class="b">
  <div class="a">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h1 align="center">欢迎注册</h1>
      <el-form-item label="用户名：" prop="userName">
        <el-input v-model.number="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="e_mile">
        <el-input type="email" v-model.number="ruleForm.e_mile"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-on:click="dLogin" type="primary" @click="open2">注册</el-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Register",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            userName:"",
            pass: '',
            checkPass: '',
            e_mile:""
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        open2() {
          this.$message({
            message: '注册成功',
            type: 'success'
          });

        },
        dLogin () {
          this.$router.push({
            path:"/person",
            query: {
            userName:this.ruleForm.userName,
            e_mile:this.ruleForm.e_mile
          }});
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
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
