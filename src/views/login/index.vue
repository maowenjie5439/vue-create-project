<script setup lang="ts">
import '@/styles/index.scss'
import { reqLogin } from '@/api/user'
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useUserTokenStore } from '@/store/userStore'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

//登录表单数据
const data = ref({
    username: 'admin',
    password: '111111'
})
//loading状态
const loading = ref(false)
const userTokenStore = useUserTokenStore()
const router = useRouter()
const login = async () => {
    console.log('执行登录方法, 表单数据: ', data.value)
    //登录按钮开始loading
    loading.value = true
    try {
        const res = await reqLogin(data.value)
        console.log('登录成功, token: ', res.data.token)
        userTokenStore.setToken(res.data.token)
        router.push('/')
        ElMessage.success('登录成功');
    } catch (error:any) {
        console.log('登录失败: ', error)
        ElMessage.error(error.message);
        
    } finally {
        loading.value = false
    }
}

const logUserState = () => {
    console.log('userState: ', userTokenStore.getToken())
}
</script>

<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login-form">
                    <h1>hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-input type="text" placeholder="请输入用户名" :prefix-icon="User" v-model="data.username"
                        style="margin:20px 0;"></el-input>
                    <el-input type="password" placeholder="请输入密码" :prefix-icon="Lock" show-password v-model="data.password"
                        style="margin-top: 20px;"></el-input>
                    <el-button type="primary" class="login-btn" style="margin: 20px 0;" @click="login"
                        :loading="loading">登录</el-button>
                    <el-button type="primary" @click="logUserState">打印用户状态信息</el-button>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login-form {
        width: 80%;
        /* 设置元素宽度为父元素宽度的80% */
        top: 30vh; //视口(viewport height)高度的30%
        position: relative; //相对定位元素相对于其正常位置进行定位。
        background: url("@/assets/images/login_form.png");
        background-size: cover;
        padding: 20px;

        h1 {
            font-size: 40px;
            color: white;
        }

        h2 {
            font-size: 20px;
            color: white;
            margin-top: 20px;
        }

        .login-btn {
            width: 100%;
        }
    }
}
</style>
