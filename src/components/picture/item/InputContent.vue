<template>
  <div>
    <b-form-textarea
      @input="$emit('input', text)"
      id="textarea"
      v-model="text"
      placeholder="소개글을 입력해주세요"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
  name: "InputContent",
  components: {},
  data() {
    return {
      text: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
