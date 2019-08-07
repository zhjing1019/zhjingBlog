<template>
    <div class="right-banner">
        <div class="right-banner-item" v-for="(item, index) in testList" :key="index">
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            testList: [1, 2]
        };
    },
}
</script>

<style lang="scss">
.right-banner{
    .right-banner-item{
        width: 100%;
        height: 300px;
        background: #fff;
        margin-bottom: 15px;
        border: 1px solid #f1f1f1;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
}
   
  
</style>
