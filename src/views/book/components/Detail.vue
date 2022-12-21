<template>
  <el-form ref="postForm" :v-model="postForm">
    <sticky :class-name="'sub-navbar'">
      <el-button v-if="isEdit" @click="showGuide">显示帮助</el-button>
      <el-button
        v-loading="loading"
        style="margin-left: 10px;"
        type="success"
        @click="submitForm"
      >
        {{ isEdit ? '编辑电子书' : '新增电子书' }}</el-button>
    </sticky>
    <div class="detail-container">
      <el-row>
        <Warning />
        <el-col :span="24">
        <!-- 编写具体表单控件 -->
        </el-col>
        <el-col :span="24">
          <EbookUpload />
        <!-- 编写具体表单控件 -->
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import Sticky from '../../../components/Sticky/index'
import EbookUpload from '../../../components/EbookUpload/index'
import Warning from '../components/Warning'
export default {
  components: {
    Sticky,
    Warning,
    EbookUpload
  },
  props: {
    isEdit: Boolean
  },
  data() {
    return {
      loading: false,
      postForm: {

      }
    }
  },
  methods: {
    showGuide() {
      console.log('show guide....')
    },
    submitForm() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .detail-container {
    padding: 40px 50px 20px;
  }
</style>
