<template>
  <div></div>
</template>

<script>
export default {
  name: "PictureDelete",
  components: {},
  data() {
    return {};
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
    //API 모듈을 통해서 삭제 로직 처리
    this.$router.push({ name: "picturelist" });
  },
  methods: {},
};
</script>

<style scoped></style>
