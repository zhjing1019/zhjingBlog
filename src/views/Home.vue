<template>
    <div class="blog-home">
        <div class="main-label">
            <div v-for="(item, index) in labelArr" :class="{'label-item': true, 'active-label': activeLabel === item.id}" :key="index" @click="labelClick(item)">{{item.label}}</div>
        </div>
        <div class="blog-main">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <div class="main-list-item">
                        <list-item v-for="(item, index) in testData" :key="index" @articalClick="articalClick"></list-item>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                    <div class="main-right">
                        <right-banner></right-banner>
                    </div>
                </el-col>
                
                
            </el-row>
            
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
            activeLabel: "0",
            testData: ['test', 'test', 'test', 'test', 'test', 'test', 'test'],
            labelArr: [
                {
                    label: "全部",
                    id: "0"
                },
                {
                    label: "webpack",
                    id: "1"
                },
                {
                    label: "webpack",
                    id: "2"
                },{
                    label: "webpack",
                    id: "3"
                },{
                    label: "webpack",
                    id: "4"
                },{
                    label: "webpack",
                    id: "5"
                },
            ]

        };
    },

    components: {HeaderFix, ListItem, RightBanner},
    methods:{
        labelClick(data) {
            this.activeLabel = data.id;
        },
        articalClick() {
            this.$router.push({ path: `/detail` });
        }
    }

}
</script>


<style lang="scss">
@import "@/style/varStyle.scss";
.blog-home{
    max-width: $max-width;
    margin: 0 auto;
    padding-top: 110px;
    .main-label{
        width: 100%;
        margin-bottom: 10px;
        .label-item{
            display: inline-block;
            margin-right: 10px;
            height: 30px;
            line-height: 30px;
            background: #fff;
            border-radius: 15px;
            padding: 0 10px;
            font-size: 12px;
            color: $theme-color;
            cursor: pointer;
            margin-top: 10px;
        }
        .active-label{
            background: $active-color;
            color: #fff;
        }
    }
    .blog-main{
        width: 100%;
        .main-list-item{
            width: 100%;
            margin-bottom: 20px;
        }
        .main-right{
            width: 100%
        }
    
    }
    
    
}
@media screen and (max-width: 800px) {
}

  
</style>
