<template>
  <div class="commentInput_commentInput__39H41">
    <textarea
      class="commentInput_commentText__2er8t"
      placeholder="댓글을 입력하세요."
      v-model="comment"
    ></textarea>
    <div class="commentInput_buttonWrapper__2f_l9">
      <button
        class="commentInput_buttonComplete__24z4R"
        name="register"
        @click="postCommentByText()"
      >
        댓글 등록
      </button>
    </div>
  </div>
</template>

<script>
import { postComment } from "@/api/picture";

export default {
  name: "InputComment",
  components: {},
  props: {
    data: {},
  },
  data() {
    return {
      comment: "",
    };
  },
  created() {},
  methods: {
    postCommentByText() {
      postComment(this.data.imageId, {
        userId: this.data.userId,
        comment: this.comment,
      })
        .then(() => location.reload())
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.commentInput_commentInput__39H41 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
}

.commentInput_commentInput__39H41 textarea {
  font-family: inherit;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 2px solid #e1e1e1;
  border-radius: 16px;
  width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  resize: none;
}

.commentInput_buttonWrapper__2f_l9 {
  display: flex;
  justify-content: flex-end;
  margin: 16px 0 24px;
}

@media screen and (max-width: 575px) {
  .commentInput_buttonComplete__24z4R {
    padding: 7px 10px;
    position: absolute;
    width: 90px;
    height: 30px;
    background: #333;
    border-radius: 40px;
    font-weight: 700;
    color: #fff;
    font-size: 12px;
  }
}

.commentInput_buttonComplete__24z4R {
  padding: 10px 30px;
  min-width: 120px;
  height: 40px;
  background: #333;
  border-radius: 50px;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
}
</style>
