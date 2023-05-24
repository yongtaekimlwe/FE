<template>
  <div>
    <div>
      <picture-description :data="this.picture"></picture-description>
      <input-comment></input-comment>
      <comment-list :comments="comments"></comment-list>
    </div>
    <b-button
      variant="outline-secondary"
      class="button-right"
      @click="updatePost"
      >글 수정</b-button
    >
    <b-button
      variant="outline-secondary"
      class="button-right"
      @click="deletePost"
      >글 삭제</b-button
    >
  </div>
</template>

<script>
import CommentList from "@/components/picture/item/CommentList.vue";
import InputComment from "@/components/picture/item/InputComment.vue";
import PictureDescription from "@/components/picture/item/PictureDescription.vue";
import { getPictureDetail } from "@/api/picture";

export default {
  name: "PictureDetail",
  components: { PictureDescription, InputComment, CommentList },
  data() {
    return {
      imageId: "",
      title: "",
      picture: {},
      comments: [
        {
          userId: "taeyong",
          content: "첫 댓글",
        },
        {
          userId: "yehan",
          content: "두번째 댓글",
        },
      ],
    };
  },
  created() {
    this.imageId = this.$route.params.imageId;
    getPictureDetail(this.imageId, ({ data }) => {
      console.log(data);
      this.picture = data;
    }),
      (error) => {
        console.log(error);
      };
  },
  methods: {
    updatePost() {
      if (confirm("수정하시겠습니까?")) {
        this.$router.replace({
          name: "pictureupdate",
          params: { id: this.imageId },
        });
      }
    },
    deletePost() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "picturedelete",
          params: { id: this.imageId },
        });
      }
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
