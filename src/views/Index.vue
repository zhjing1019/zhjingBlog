<template>
    <div class="blog-index">
        <div class="header">
            <header-fix></header-fix>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer-index">
            <Footer></Footer>
        </div>
        
    </div>
</template>
<script>
import HeaderFix from "@/components/HeaderFix.vue"
import Footer from "@/components/Footer"


export default {
    data() {
        return {};
    },
    components: {HeaderFix, Footer}
}
</script>


<style lang="scss">


  
</style>
