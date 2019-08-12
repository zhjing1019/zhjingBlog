<template>
    <div class="introduce-card">
        <el-row>
            <el-col :span="10" class="introduce-left">
                <el-card shadow="always" class="card-main" >
                    <img :src="require('@/img/guoliaoImg.jpg')" alt="">
                    <p>北漂程序猿</p>
                    <p>热爱编程</p>
                    <div class="github">
                        github: 
                        <a href="https://github.com/guoliao502" target="_blank">https://github.com/guoliao502</a>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4" class="introduce-center">
                <img :src="require('@/img/topLogo.png')" alt="">
            </el-col>
            <el-col :span="10"  class="introduce-right">
                <el-card shadow="always" class="card-main">
                    <img :src="require('@/img/zhangjingImg.jpg')" alt="">
                    <p>北漂程序媛</p>
                    <p>热爱生活</p>

                    <div class="github">
                        github: 
                        <a href="https://github.com/guoliao502" target="_blank">https://github.com/zhjing1019</a>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            
        };
    },
    methods: {

        
    }
}
</script>


<style lang="scss">
@import "@/style/varStyle.scss";
$card-height: 260px;
.introduce-card{
    width: 100%;
    .card-main{
        min-height: $card-height;
        padding: 20px;
        text-align: center;
        img{
            width: 60px;
            height: 60px;
            border-radius: 60px;
            transition: all 0.5s ease-in-out;  
            -webkit-transition: all 0.5s ease-in-out;  
            -moz-transition: all 0.5s ease-in-out;  
            -o-transition: all 0.5s ease-in-out; 
        }
        p{
            margin-top: 10px;
            font-size: 14px;
            color: $font-color;
        }
        &:hover img {
            -webkit-transform: rotateZ(360deg);
            -moz-transform: rotateZ(360deg);
            -o-transform: rotateZ(360deg);
            -ms-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
        .github{
            margin-top: 20px;
        }
    }
    .introduce-center{
        height: $card-height;
        line-height: $card-height;
        text-align: center;
        img{
            width: 120px;
            vertical-align: middle;
        }
    }
    
}

  
</style>
