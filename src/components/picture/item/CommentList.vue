<template>
  <div>
    <ul class="commentList_CommentList__30HUh">
      <li
        v-for="comment in comments"
        :key="comment.userId"
        class="commentItem_commentContainer__3eMR4"
      >
        <section class="commentItem_commentHeader__3-Wux">
          <div class="commentItem_avatarWrapper__2J4nR">
            <img class="commentItem_userImg__jWpVc" src="@/assets/travel.png" />
            <div class="commentItem_commentInfo__5KL0S">
              <div class="commentItem_title__36t1w">
                <div class="commentItem_userNickname__PQ8kV">
                  {{ comment.userId }}
                </div>
                <!-- <div class="commentItem_registeredDate__2TPJZ">
                  2021-08-07 22:48:54
                </div> -->
              </div>
            </div>
          </div>
        </section>
        <section class="commentItem_commentContent__1yK7o">
          <p class="commentItem_commentContent__1yK7o">
            {{ comment.content }}
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  components: {},
  props: {
    comments: Array,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.commentList_CommentList__30HUh {
  width: 100%;
}
.commentItem_commentContainer__3eMR4 {
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e1e1e1;
}
.commentItem_commentHeader__3-Wux {
  display: flex;
  justify-content: space-between;
}

.commentItem_avatarWrapper__2J4nR {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.commentItem_userImg__jWpVc {
  display: block;
  width: 52px;
  height: 52px;
  margin-right: 16px;
  border-radius: 50%;
  object-fit: cover;
}

.commentItem_commentInfo__5KL0S,
.commentItem_title__36t1w {
  display: flex;
  flex-direction: column;
}
.commentItem_userNickname__PQ8kV {
  color: #333;
  font-weight: 700;
}

.commentItem_registeredDate__2TPJZ {
  font-size: 14px;
  line-height: 126.5%;
  letter-spacing: -0.005em;
  color: #9f9f9f;
}

.commentItem_commentContent__1yK7o {
  font-size: 1.125rem;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: break-all;
  overflow-wrap: break-word;
}

@media screen and (max-width: 575px) {
  .commentItem_commentContent__1yK7o {
    font-size: 1rem;
  }
}
.commentItem_commentContent__1yK7o {
  display: flex;
  font-size: 1.125rem;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: break-all;
  overflow-wrap: break-word;
}
</style>
