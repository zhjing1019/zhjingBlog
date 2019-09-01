<template>
    <div class="type-card">
        <el-row :gutter="12">
            <el-col class="type-card-item"  :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item, index) in labelList" :key="index">
                <el-card shadow="hover" >
                    <p @click="cardClick(item)"> {{item.name}}</p>
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
    props: {
        labelList: Array,
    },
    methods: {
        cardClick(item) {
            this.$router.push({ path: `/home`, query: { ...item } });
        }
    }
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";
.type-card{
    .type-card-item{
        margin-bottom: 10px;
    }
}
</style>
