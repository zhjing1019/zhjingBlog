<template>
    <div class="nav-divider">
        <span v-for="(item, index) in labelList" :key="index">
            <span class="divider-active" @click="dividerClick(item)">{{item.title}}</span>
            <el-divider v-if="index !== labelList.length - 1" direction="vertical"></el-divider>
        </span>
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
        dividerClick(data) {
            this.$emit('dividerClick', data)
        }
    }
}
</script>

<style lang="scss">
.nav-divider{
    color: #909090;
    font-size: 14px;
    .divider-active{
        color:#007fff;
        cursor: pointer;
        
    }

}
    
  
</style>
