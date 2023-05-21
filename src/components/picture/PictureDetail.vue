<template>
  <div>
    <div>
      <picture-description :data="data"></picture-description>
      <input-comment></input-comment>
      <comment-list :comments="comments"></comment-list>
    </div>
  </div>
</template>

<script>
import CommentList from "./item/CommentList.vue";
import InputComment from "./item/InputComment.vue";
import PictureDescription from "./item/PictureDescription.vue";

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
  methods: {},
};
</script>

<style scoped></style>
