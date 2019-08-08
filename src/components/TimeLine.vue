<template>
    <div class="time-line">
        <el-steps align-center>
            <el-step v-for="(item, index) in timeLineList" :key="index" :title="item.title" :icon="item.icon" :description="item.description"></el-step>
        </el-steps>
    </div>
</template>
<script>
import { timeLineList } from "@/common/config.js"
export default {
    data() {
        return {
            timeLineList: timeLineList
        };
    },
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";
.time-line{
    .el-step__icon{
        background: $bg-color;
    }
}

   
  
</style>
