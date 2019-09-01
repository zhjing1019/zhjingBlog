<template>
    <div class="blog-index">
        <div class="header">
            <header-fix :actHeader="actHeader" :isArt="isArt" :arr="arr" @dividerClick="dividerClick" :activeType="activeType" :labelData="labelData"></header-fix>
        </div>
        <div class="main">
            <router-view @typeCardClick="dividerClick" :arr="arr" :labelData="labelData" @tagClick="tagClick" :activeTag="activeTag" :activeType="activeTag"></router-view>
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
            activeType: "",
            activeTag: "all",
            actHeader: "0"
        };
    },
    components: {HeaderFix, Footer},
    watch: {
        $route: {
            handler: function(val){
                if(val.name === "Home") {
                    this.isArt = true;
                    this.actHeader = "1";
                } else {
                    this.isArt = false;
                    this.actHeader = "0"
                }
                if(Object.keys(val.query).length === 0) {
                    this.activeType = this.arr[0] && this.arr[0].name ? this.arr[0].name : "";
                } else {
                    this.activeType = val.query.name;
                }

            },
            deep: true,
            immediate: true,
        }
    },
    mounted() {
        this.labelType()
    },
    methods: {
        //获得分类
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
            this.activeType = data.name
        },
        //标签点击
        tagClick(data) {
            data === "all" ? this.activeTag = "all" : this.activeTag = data.name
        },
        //分类点击
        typeClick(data) {
            this.activeType = data.name
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
