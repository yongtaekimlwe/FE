<template>
  <div>
    <b-form-input
      @input="$emit('input', title)"
      class="half-width"
      placeholder="제목 입력"
      v-model="title"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  name: "InputTitle",
  components: {},
  data() {
    return {
      title: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.half-width {
  width: 50%;
  margin-top: 50px;
}
</style>
