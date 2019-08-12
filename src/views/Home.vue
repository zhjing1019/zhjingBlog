<template>
    <div class="blog-home">
        <div class="main-right">
            <right-banner></right-banner>
            </div>
            <div class="main-list-item">
            <list-item v-for="(item, index) in testData" :key="index"></list-item>
        </div>
    </div>
</template>
<script>
import HeaderFix from "@/components/HeaderFix.vue"
import ListItem from "@/components/ListItem.vue"
import RightBanner from "@/components/RightBanner.vue"

export default {
    data() {
        return {
            testData: ['test', 'test', 'test', 'test', 'test', 'test', 'test']

        };
    },

    components: {HeaderFix, ListItem, RightBanner}

}
</script>


<style lang="scss">
.blog-home{
    width: 1200px;
    margin: 0 auto;
    padding-top: 120px;
    .main-list-item{
        width: 850px;
    }
    .main-right{
        float: right;
        width: 330px;
    }
    
}

  
</style>
