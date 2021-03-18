<template>
  <div class="login_info">
    <div class="login">
      <el-form ref="form"
               :model="form"
               label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.username"
                    placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"
                    placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item class="loginBtn">
          <el-button type="primary"
                     @click="onSubmit('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

//form表单类型定义
interface FormTypes {
  username: string
  password: string
}
@Component
export default class Login extends Vue {
  form: FormTypes = {
    username: '',
    password: '',
  }

  onSubmit(formName: any) {
    const formHtml: any = this.$refs[formName] as HTMLFormElement
    formHtml.validate((valid: boolean) => {
      if (valid)
        this.$store.dispatch('user/login', this.form).then((res) => {
          if (res) this.$router.push({ path: '/' })
        })
    })
  }
}
</script>


<style lang='less'>
.login_info{
    width:100%;
    height:100%;
    position: relative;
    background:rgb(43, 42, 42)
}


.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  padding: 40px;
  background: rgba(52, 56, 61, 0.4);
  border-radius: 10px;

  .el-form-item__label {
    text-align: center;
    color:#fff;
  }

  .loginBtn .el-form-item__content {
    text-align: center;
    margin-left: 0 !important;

    .el-button--primary {
      width: 40%;
    }
  }
}
</style>
