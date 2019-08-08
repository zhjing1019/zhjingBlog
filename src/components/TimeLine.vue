<template>
    <div class="time-line">
        <!-- <el-timeline>
            <el-timeline-item v-for="(item, index) in timeLineList" 
            :key="index"
            :type="item.type"
            :size="item.size"
            placement="top"
            :timestamp="item.timestamp">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
            </el-timeline-item>
        </el-timeline> -->
        <el-steps>
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
