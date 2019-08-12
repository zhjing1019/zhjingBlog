<template>
    <div class="footer">
        <p>Email: {{footerInfo.email}}</p>
        <p style='margin-top: 10px'>{{footerInfo.right}}</p>
    </div>
</template>
<script>
import { footerInfo } from "@/common/config.js"
export default {
    data() {
        return {
            footerInfo: footerInfo
        };
    },
}
</script>

<style lang="scss">
@import "@/style/varStyle.scss";
.footer {
    min-height: 70px;
    margin-top: 30px;
    text-align: center;
    font-size: 12px;
    padding: 10px;
    width: 100%;
    color: #C0C4CC;
    background: #fff;
    border-top: 1px solid #f1f1f1;
}

</style>
