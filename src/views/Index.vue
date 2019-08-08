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

export default {
    data() {
        return {};
    },
    components: {HeaderFix}
}
</script>


<style lang="scss">
.blog-index{
    
}

  
</style>
