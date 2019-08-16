<template>
    <div class="right-banner">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title-div"></span>
                <span>热门</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
        <el-card class="box-card hot-card">
            <div slot="header" class="clearfix">
                <span class="title-div"></span>
                <span>最新</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            testList: [1, 2]
        };
    },
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";
.right-banner{
    .right-banner-item{
        width: 100%;
        height: 300px;
        background: #fff;
        margin-bottom: 15px;
        border: 1px solid #f1f1f1;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
    .box-card{
        .title-div {
            display: inline-block;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: $active-color;
            margin-right: 5px;
            margin-left: -10px;
        }
        .el-card__header{
            padding-top: 10px;
            padding-bottom: 10px;
            color: $active-color;
        }
        .el-card__body{
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    .hot-card{
        margin-top: 20px;
    }
    .text {
        font-size: 14px; 
        cursor: pointer;
    }

    .item {
        margin-bottom: 10px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }


}
   
  
</style>
