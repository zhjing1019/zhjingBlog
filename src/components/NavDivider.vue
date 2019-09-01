<template>
    <div class="nav-divider">
        <span class="nav-divider-item" v-for="(item, index) in arr" :key="index">
            <span :class="{'divider-active': item.name === active}" @click="dividerClick(item, index)">{{item.name}}</span>
            <el-divider v-if="index !== arr.length - 1" direction="vertical"></el-divider>
        </span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 'web'
        };
    },
    props: {
        arr: Array
    },
    methods: {
        dividerClick(data) {
            this.active = data.name;
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
