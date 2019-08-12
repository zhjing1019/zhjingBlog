<template>
    <div class="blog-home">
        <div class="main-list-item">
            <list-item v-for="(item, index) in testData" :key="index"></list-item>
        </div>
        <div class="main-right">
            <right-banner></right-banner>
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
@import "@/style/varStyle.scss";
.blog-home{
    max-width: $max-width;
    margin: 0 auto;
    padding-top: 120px;
    display: flex;
    .main-list-item{
        width: 850px;
        margin-right: 20px;
    }
    .main-right{
        width: 330px;
    }
    
}

  
</style>
