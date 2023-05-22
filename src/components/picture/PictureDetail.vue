<template>
  <div>
    <div>
      <picture-description :data="data"></picture-description>
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

export default {
  name: "PictureDetail",
  components: { PictureDescription, InputComment, CommentList },
  data() {
    return {
      id: "",
      title: "",
      data: {
        title: "여행가자!",
        content: "여행을 가고 싶어요 여름 휴가가 얼마 남지 않았다 ㅎ",
        userId: "taeyong",
        likeCount: 25,
        imageUrl: "https://picsum.photos/300/300/?image=41",
        tags: [
          {
            menu_icon_src: "fa-brands fa-fort-awesome",
            menu_desc: "휴가",
          },
          {
            menu_icon_src: "fa-brands fa-fort-awesome",
            menu_desc: "연차",
          },
          {
            menu_icon_src: "fa-brands fa-fort-awesome",
            menu_desc: "여름",
          },
          {
            menu_icon_src: "fa-brands fa-fort-awesome",
            menu_desc: "호캉스",
          },
        ],
      },
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
    this.id = this.$route.params.id;
  },
  methods: {
    updatePost() {
      if (confirm("수정하시겠습니까?")) {
        this.$router.replace({
          name: "pictureupdate",
          params: { id: this.id },
        });
      }
    },
    deletePost() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "picturedelete",
          params: { id: this.id },
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
