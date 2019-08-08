<template>
    <div class="blog-protal">
        <div class="protal-main">
            <el-carousel :interval="1000" type="card" height="400px" indicator-position="none">
                <el-carousel-item v-for="(item, index) in arr" :key="index" @click="bannerClick(item)">
                    <div class="banner-main">
                        <h3 class="banner-title">{{ item.title }}</h3>
                        <img :src="require(`@/img/${item.img}.jpeg`)" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="introduce-main">
                <introduce-card></introduce-card>
            </div>
            <div class="label-list-div">
                <time-line></time-line>
            </div>
        </div>
    </div>
</template>
<script>
import IntroduceCard from "@/components/IntroduceCard"
import TimeLine from "@/components/TimeLine"
import { labelList } from "@/common/config.js"
export default {
    data() {
        return {
            arr: labelList
        };
    },
    components: {
        IntroduceCard,
        TimeLine
    },
    methods: {
        bannerClick(item) {
            console.log(item);
        },
    }
}
</script>


<style lang="scss">
@import "@/style/varStyle.scss";
.blog-protal {
    .protal-main{
        width: 1200px;
        margin: 0 auto;
        padding-top: 70px;
        .banner-main{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                cursor: pointer;
                transition: all 0.5s; /* 所有的属性变化在0.5s的时间段内完成 */
            }
            h3{
                width: 300px;
                height: 50px;
                line-height: 50px;
                background: rgba(255, 255, 255, 0.65);
                border-radius: 5px;
                text-align: center;
                color: $font-color;
                font-size: 30px;
                margin-top: -25px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -150px;
                z-index: 2;
            }
            &:hover img{
                transform: scale(1.2); /* 鼠标放到图片上的时候图片按比例放大1.5倍   */
            }
        }
        .introduce-main{
            margin-top: 20px;
        }
        .label-list-div{
            margin-top: 30px;
        }
    }
}

  
</style>
