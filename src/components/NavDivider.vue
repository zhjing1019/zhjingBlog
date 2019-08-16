<template>
    <div class="nav-divider">
        <span class="nav-divider-item" v-for="(item, index) in labelList" :key="index">
            <span :class="{'divider-active': item.active === active}" @click="dividerClick(item, index)">{{item.title}}</span>
            <el-divider v-if="index !== labelList.length - 1" direction="vertical"></el-divider>
        </span>
    </div>
</template>
<script>
import { labelList } from "@/common/config.js"
export default {
    data() {
        return {
            labelList: labelList,
            active: 'web'
        };
    },
    methods: {
        dividerClick(data) {
            this.active = data.active;
            this.$emit('dividerClick', data)
        }
    }
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";
.nav-divider{
    color: #909090;
    font-size: 14px;
    .divider-active{
        color:$active-color;
        cursor: pointer;
    }
    .nav-divider-item{
        cursor: pointer;
    }
}
    
  
</style>
