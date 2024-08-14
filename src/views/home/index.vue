<template>
<div>
    <!-- <h3>Home</h3> -->
    <Layout></Layout>
</div>
</template>

<script lang="ts" setup>
import Layout from './../layout/index.vue'
import { h, onMounted } from 'vue'
import { ElNotification} from 'element-plus'
//获取当前时间: 上午 | 下午 | 晚上 | 凌晨
const getTime = ():string =>{
    const hour = new Date().getHours();
    if(hour < 6){
        return "凌晨";
    }else if(hour < 12){
        return "上午";
    }else if(hour < 18){
        return "下午";
    }else{
        return "晚上";
    }
}
onMounted(()=>{
    ElNotification({
    type:'success',
    title: `Hi, ${getTime()}好`,
    message: '欢迎回来',
  })
})
</script>

<style lang="scss" scoped>



</style>
