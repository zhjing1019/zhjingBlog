<template>
    <div class="blog-index">
        <div class="header">
            <header-fix :isArt="isArt" :arr="arr" @dividerClick="dividerClick"></header-fix>
        </div>
        <div class="main">
            <router-view :arr="arr" :labelData="labelData"></router-view>
        </div>
        <div class="footer-index">
            <Footer></Footer>
        </div>
        
    </div>
</template>
<script>
import HeaderFix from "@/components/HeaderFix.vue"
import Footer from "@/components/Footer"
import axios from "axios"


export default {
    data() {
        return {
            isArt: false,
            arr: [],
            labelData: {},
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
    mounted() {
        this.labelType()
    },
    methods: {
        labelType() {
            let _this = this;
            axios.get('cms/type')
                .then(function (res) {
                    _this.arr = res.data.data   
                })
                .catch(function (error) {
                    _this.$message.error(error.msg);
            })
        },
        dividerClick(data) {
            this.labelData = data;
        }
    }

}
</script>


<style lang="scss">
.blog-index{
    .main{
        padding: 0 20px;
    }
}

  
</style>
