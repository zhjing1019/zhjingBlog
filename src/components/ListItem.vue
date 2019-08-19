<template>
    <div class="list-item" @click="articalClick">
        <div class="list-item-date">
            2018-07-11
        </div>
        <div class="list-item-title">
            文章标题
        </div>
        <div class="list-item-card">
            文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        articalClick() {
            this.$emit('articalClick')
        }
    }
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";
.list-item{
    width: 100%;
    height: 120px;
    padding: 18px 24px;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    border: 1px solid #f1f1f1;
    border-bottom: 0;
    cursor: pointer;
    &:hover{
        background: #fcfcfc;
         box-shadow: 2 2px 2px 2 #f1f1f1;
    }
    .list-item-date{
        font-size: 12px;
        color: $theme-color;
    }
    .list-item-title{
        color: #333;
        font-size: 20px;
        margin-top: 10px;
    }
    .list-item-card{
        margin-top: 10px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        white-space:nowrap;
        overflow:hidden;
        text-overflow : ellipsis;
        color: $theme-color;
    }
    
}
    
  
</style>
