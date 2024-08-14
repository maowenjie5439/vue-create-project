<template>
    <div class="layout-container">
        <!-- 左侧菜单 -->
        <div class="layout-slider">
            slider
        </div>
        <div class="layout-right">
            <!-- 顶部导航 -->
            <div class="layout-tabbar">
                tabbar
            </div>
            <!-- 内容展示区 -->
            <div class="layout-main">
                <p style="height: 1000px; background: yellowgreen;">
                    我是一个段落
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "../../styles/variable";

.layout-container {
    display: flex;
    height: 100vh;
    flex-direction: row;

    .layout-slider {
        flex: 0 0 150px;
        /* 固定宽度 */
        height: 100vh;
        background-color: $base-menu-background;
    }

    .layout-right {
        flex: 0 1 calc(100% - 150px);
        /* 占据剩余空间 */
        display: flex;
        flex-direction: column;

        /* 垂直排列 */
        .layout-tabbar {
            flex: 0 0 10%;
            /* 固定高度，占据15% */
            background-color: cyan;
            /* 添加背景颜色 */
        }

        .layout-main {
            flex: 1 0 90%;
            /* 占据剩余空间 */
            background-color: red;
            /* 添加背景颜色 */
            padding: 20px;
            overflow: auto;
             
        }
    }
}
</style>
