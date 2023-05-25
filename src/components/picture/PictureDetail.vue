<template>
  <div>
    <div>
      <picture-description :data="this.picture"></picture-description>
      <input-comment :data="data"></input-comment>
      <comment-list :comments="comments"></comment-list>
    </div>
    <b-button
      v-if="userInfo && picture.userId === userInfo.id"
      variant="outline-secondary"
      class="button-right"
      @click="updatePost"
      >글 수정</b-button
    >
    <b-button
      v-if="userInfo && picture.userId === userInfo.id"
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
import { getPictureDetail, getPictureCommentsByImageId } from "@/api/picture";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  name: "PictureDetail",
  components: { PictureDescription, InputComment, CommentList },
  data() {
    return {
      data: {},
      title: "",
      picture: {},
      comments: [],
    };
  },
  created() {
    this.data["imageId"] = this.$route.params.imageId;

    getPictureDetail(
      this.data.imageId,
      ({ data }) => {
        this.picture = data;
      },
      (error) => {
        console.log(error);
      }
    );
    getPictureCommentsByImageId(
      this.data.imageId,
      ({ data }) => {
        this.comments = data.comments;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    updatePost() {
      if (confirm("수정하시겠습니까?")) {
        this.$router.replace({
          name: "pictureupdate",
          params: { id: this.data.imageId },
        });
      }
    },
    deletePost() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "picturedelete",
          params: { id: this.data.imageId },
        });
      }
    },
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
};
</script>

<style scoped>
.button-right {
  margin-top: 100px;
  float: right;
}
</style>
