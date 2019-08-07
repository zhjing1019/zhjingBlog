<template>
    <div class="blog-edit">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        <el-row class="text-align-right el-form-footer">
            <el-button class="red-default-btn" @click="cancel">取消</el-button>
            <el-button class="red-default-btn" @click="saveDraft">保存到草稿箱</el-button>
            <el-button class="red-default-btn" @click="seeModel">预览</el-button>
            <el-button type="primary" class="red-btn" @click="creatAdd">立即创建</el-button>
        </el-row>
    </div>

</template>
<script>

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
            editorOption: {}
        };
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>


<style lang="scss">
.blog-edit{
    padding: 30px;
    height: 400px;
}
  
</style>
