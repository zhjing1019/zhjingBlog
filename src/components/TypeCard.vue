<template>
    <div class="type-card">
        <el-row :gutter="12">
            <el-col class="type-card-item"  :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item, index) in labelList" :key="index">
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
.type-card{
    .type-card-item{
        margin-bottom: 10px;
    }
}
</style>
