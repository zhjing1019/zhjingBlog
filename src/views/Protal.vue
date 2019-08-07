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
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            arr: [
                {
                    img: 'banner1',
                    title: '前端',
                    path: ''
                },
                {
                    img: 'banner2',
                    title: 'JAVA',
                    path: ''
                },
                {
                    img: 'banner4',
                    title: 'Python',
                    path: ''
                },
                {
                    img: 'banner5',
                    title: '安全',
                    path: ''
                },
            ],
        };
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

            }

        }
    }
}

  
</style>
