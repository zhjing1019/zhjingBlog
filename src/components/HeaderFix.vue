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
            <ul class="header-type">
                <li v-for="(item, index) in headerNav" :key="index">{{item.text}}</li>
            </ul>
            <img class="logo-img" src="@/img/logo.png" alt="">
            <span class="logo-text">测试测试</span>
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
                    id: 1,
                    text: '测试测试'
                },
                {
                    id: 1,
                    text: '测试测试'
                },
                {
                    id: 1,
                    text: '测试测试'
                },
            ]
        };
    },
}
</script>

<style lang="scss">
    .header-fix{
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
        .header-type{
            float: right;
            height: 60px;
            list-style: none;
            li{
                float: right;
                height: 60px;
                line-height: 60px;
                padding: 0 20px;
                color: #71777c;
                font-size: 16px;
            }
        }
        .logo-img{
            width: 50px;
            height: 50px;
            vertical-align: middle;
            margin-right: 10px;
        }
        .logo-text{
            font-size: 20px;
            color: #007fff;
        }

    }
  
</style>
