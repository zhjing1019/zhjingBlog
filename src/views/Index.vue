<template>
    <div class="blog-index">
        <div class="header">
            <header-fix :isArt="isArt"></header-fix>
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
        return {
            isArt: false
        };
    },
    components: {HeaderFix, Footer},
    watch: {
        $route: {
            handler: function(val){
                val.name === "Home" ? this.isArt = true : this.isArt = false
            },
            deep: true,
            immediate: true,
        }
    },

}
</script>


<style lang="scss">
.blog-index{
    .main{
        padding: 0 20px;
    }
}

  
</style>
