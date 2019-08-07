<template>
    <div class="blog-index">
        <div class="header">
            <header-fix></header-fix>
        </div>
        <div class="main">
            <router-view></router-view>
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
.blog-index{
    
}

  
</style>
