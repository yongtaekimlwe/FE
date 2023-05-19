<template>
  <div>
    <h4>제목을 입력하고 태그를 선택해주세요</h4>
    <hr />
    <b-form-input
      class="half-width"
      placeholder="제목 입력"
      v-model="title"
    ></b-form-input>
    <h6>태그 선택</h6>
    <div class="checkbox-group-wrapper">
      <b-form-checkbox-group
        v-model="selectedTags"
        :options="options"
      ></b-form-checkbox-group>
    </div>
    <br />
    <br />
    <div>Title: {{ title }}</div>
    <div>Selected: {{ selectedTags }}</div>
    <br />
    <h4>소개글과 사진들을 선택해주세요</h4>
    <hr />
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="소개글을 입력해주세요"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-form-file
      class="half-width-file"
      v-model="selectedFiles"
      multiple
      accept="image/jpeg, image/png, image/gif"
    ></b-form-file>
    <b-button variant="outline-secondary" class="button-right" @click="submit"
      >글 작성</b-button
    >
  </div>
</template>

<script>
export default {
  name: "PicturePost",
  components: {},
  data() {
    return {
      title: "",
      selectedTags: [], // 여러 개의 값을 선택할 경우 배열로 선언
      selectedFiles: [],
      options: [
        { value: "option1", text: "Option 1" },
        { value: "option2", text: "Option 2" },
        { value: "option3", text: "Option 3" },
        { value: "option4", text: "Option 4" },
      ],
      text: "",
    };
  },
  created() {},
  methods: {
    submit() {
      if (this.isEmpty()) {
        alert("모든 폼에 대한 입력을 완료해야 합니다.");
      } else {
        //전송 로직
      }
    },
    isEmpty() {
      if (
        this.title === "" ||
        this.selectedFiles.length === 0 ||
        this.selectedTags.length === 0 ||
        this.text === ""
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  text-align: left;
  margin-top: 50px;
}

h6 {
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  text-align: left;
  margin-top: 50px;
}

.half-width {
  width: 50%;
  margin-top: 50px;
}

.half-width-file {
  width: 50%;
  margin-top: 50px;
  float: left;
}

.checkbox-group-wrapper {
  float: left;
  margin-right: 20px;
}

.button-right {
  margin-top: 100px;
  float: right;
}
</style>
