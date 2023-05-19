<template>
  <div>
    <section>
      <middle-title :input="firstTitle"></middle-title>
      <input-title v-model="title"></input-title>
    </section>
    <section>
      <select-tag @handleTagChange="handleTagChange"></select-tag>
    </section>
    <section>
      <middle-title :input="secondTitle"></middle-title>
      <input-description v-model="description"></input-description>
      <input-file @handleFileChange="handleFileChange"></input-file>
      <b-button variant="outline-secondary" class="button-right" @click="submit"
        >글 작성</b-button
      >
      <b-button variant="outline-secondary" class="button-right" @click="cancel"
        >취소</b-button
      >
    </section>
  </div>
</template>

<script>
import MiddleTitle from "@/components/picture/item/MiddleTitle.vue";
import InputDescription from "@/components/picture/item/InputDescription.vue";
import SelectTag from "@/components/picture/item/SelectTag.vue";
import InputTitle from "@/components/picture/item/InputTitle.vue";
import InputFile from "@/components/picture/item/InputFile.vue";

export default {
  name: "PicturePost",
  components: {
    MiddleTitle,
    SelectTag,
    InputDescription,
    InputTitle,
    InputFile,
  },
  data() {
    return {
      firstTitle: "제목을 입력하고 태그들을 선택해주세요",
      secondTitle: "소개글을 입력해주시고 사진을 선택해주세요",
      title: "",
      selectedTags: [],
      selectedFiles: [],
      description: "",
    };
  },
  created() {},
  methods: {
    handleTagChange(selectedTags) {
      this.selectedTags = selectedTags;
    },
    handleFileChange(selectedFiles) {
      this.selectedFiles = selectedFiles;
    },
    cancel() {
      this.$router.go(-1);
    },
    submit() {
      if (this.isEmpty()) {
        alert("모든 폼에 대한 입력을 완료해야 합니다.");
      } else {
        //전송 로직
      }
    },
    isEmpty() {
      return (
        this.title === "" ||
        this.selectedFiles.length === 0 ||
        this.selectedTags.length === 0 ||
        this.description === ""
      );
    },
  },
};
</script>

<style scoped>
.button-right {
  margin-top: 100px;
  float: right;
}
</style>
