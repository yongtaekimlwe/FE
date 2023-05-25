<template>
  <div></div>
</template>

<script>
import { deletePictureBoard } from "@/api/picture";

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
    deletePictureBoard(id)
      .then(() => this.$router.push({ name: "picturelist" }))
      .catch((error) => console.log(error));
  },
  methods: {},
};
</script>

<style scoped></style>
