<template>
    <div class="header-fix">
        <div class="header-main">
            <div class="header-search">
                <el-input
                    placeholder="请输入搜索内容"
                    prefix-icon="el-icon-search"
                    v-model="searchText">
                </el-input>
            </div>

            <div class="head-tab">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane v-for="(item, index) in headerNav" :key="index" :label="item.text" :name="`${index}`"></el-tab-pane> 
                </el-tabs>
            </div>
            <img class="logo-img" src="@/img/verterLogo.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchText: "",
            headerNav:[
                {
                    id: '1',
                    text: '首页',
                    path: 'protal'
                },
                {
                    id: '2',
                    text: '文章',
                    path: 'home',
                },
                {
                    id: '3',
                    text: '热门',
                    path: 'protal'
                },
            ],
            activeName: ''
 
        };
    },
    methods: {
        handleClick() {
            this.$router.push({ path: `/${this.headerNav[this.activeName].path}` });
        }
 
    }
}
</script>

<style lang="scss">
    .header-fix{
        z-index: 100;
        width: 100%;
        height: 60px;
        background-color: #fff;
        position: fixed;
        line-height: 60px;
        border-bottom: 1px solid #f1f1f1;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        .header-main {
            width: 1200px;
            margin: 0 auto;
            .header-search{
                width: 150px;
                float: right;
            }
        }
        .head-tab{
            float: right;
            height: 60px;
            list-style: none;
            margin-right: 20px;
            .el-tabs__content{
                display: none;
            }
            .el-tabs__nav-wrap::after{
                background: transparent;
            }
        }
        .logo-img{
            // width: 50px;
            height: 50px;
            vertical-align: middle;
            margin-right: 10px;
            margin-top: -3px;
        }
        .logo-text{
            font-size: 20px;
            color: #007fff;
        }

    }
  
</style>
