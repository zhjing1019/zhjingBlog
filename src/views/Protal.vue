<template>
    <div class="blog-protal">
        <div class="protal-main">
            <el-carousel class="hidden-xs-only" :interval="1000" type="card" indicator-position="none" height="400px">
                <el-carousel-item v-for="(item, index) in arr" :key="index">
                    <div class="banner-main"  @click="bannerClick(item)">
                        <h3 class="banner-title">{{ item.title }}</h3>
                        <img :src="require(`@/img/${item.img}.jpeg`)" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
            <el-carousel class="hidden-sm-and-up" :interval="1000" indicator-position="none" height="30vh">
                <el-carousel-item v-for="(item, index) in arr" :key="index">
                    <div class="banner-main"  @click="bannerClick(item)">
                        <h3 class="banner-title">{{ item.title }}</h3>
                        <img :src="require(`@/img/${item.img}.jpeg`)" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="type-div">
                <type-card></type-card>
            </div>
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
import TypeCard from "@/components/TypeCard"
import TimeLine from "@/components/TimeLine"
import { labelList } from "@/common/config.js"
export default {
    data() {
        return {
            arr: labelList,
        };
    },
    components: {
        IntroduceCard,
        TimeLine,
        TypeCard,
    },
    methods: {
        bannerClick(item) {
            this.$router.push({ path: `/${item.path}` });
        },
    }
}
</script>


<style lang="scss">
@import "@/style/varStyle.scss";
.blog-protal {
    .protal-main{
        max-width: $max-width;
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
                max-width: 300px;
                width: 50%;
                margin: 0 auto;
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
                margin-left: -25%;
                z-index: 2;
            }
            &:hover img{
                transform: scale(1.2); /* 鼠标放到图片上的时候图片按比例放大1.5倍   */
            }
        }
        .type-div{
            margin-top: 30px;
            text-align: center;
        }
        .introduce-main{
            margin-top: 30px;
        }
        .label-list-div{
            margin-top: 40px;
        }
    }
}
@media screen and (max-width: 800px) {

}

  
</style>
