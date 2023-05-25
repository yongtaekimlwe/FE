<template>
  <div>
    <b-form-file
      class="half-width-file"
      v-model="file"
      accept="image/jpeg, image/png, image/gif"
    ></b-form-file>
  </div>
</template>

<script>
export default {
  name: "InputFile",
  components: {},
  data() {
    return {
      file: [],
    };
  },
  watch: {
    file: {
      handler(newVal) {
        this.handleFileChange(newVal);
      },
    },
  },
  created() {},
  methods: {
    handleFileChange(newVal) {
      this.$emit("handleFileChange", newVal);
    },
  },
};
</script>

<style scoped>
.half-width-file {
  width: 50%;
  margin-top: 50px;
  float: left;
}
</style>
