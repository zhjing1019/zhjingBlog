<template>
    <div class="blog-home">
        <div class="main-right">
            <right-banner></right-banner>
            </div>
            <div class="main-list-item">
                <div class="main-nav-divider">
                    <nav-divider></nav-divider>
                </div>
            <list-item v-for="(item, index) in testData" :key="index"></list-item>
        </div>
    </div>
</template>
<script>
import HeaderFix from "@/components/HeaderFix.vue"
import ListItem from "@/components/ListItem.vue"
import NavDivider from "@/components/NavDivider.vue"
import RightBanner from "@/components/RightBanner.vue"

export default {
    data() {
        return {
            testData: ['test', 'test', 'test', 'test', 'test', 'test', 'test']

        };
    },

    components: {HeaderFix, ListItem, NavDivider, RightBanner}

}
</script>


<style lang="scss">
.blog-home{
    width: 1200px;
    margin: 0 auto;
    padding-top: 75px;
    .main-list-item{
        width: 850px;
        .main-nav-divider{
            height: 45px;
            line-height: 45px;
            background: #fff;
            border: 1px solid #f1f1f1;
            border-bottom: 0;
            padding: 0 24px;
        }
    }
    .main-right{
        float: right;
        width: 330px;
    }
    
}

  
</style>
