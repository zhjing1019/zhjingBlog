<template>
    <div class="time-line">
        <el-row :gutter="12">
            <el-col :span="6" v-for="(item, index) in labelList" :key="index">
                <el-card shadow="hover" >
                    <p @click="cardClick(item)"> {{item.title}}</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { labelList } from "@/common/config.js"
export default {
    data() {
        return {
            labelList: labelList
        };
    },
    methods: {
        cardClick(item) {
            this.$router.push({ path: `/${item.path}` });

        }
    }
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";

</style>
