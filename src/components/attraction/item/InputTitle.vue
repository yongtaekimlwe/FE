<template>
  <div class="postRegister_postContentWrapper__3BXZ6">
    <span class="postRegister_sequence__nC1Px">✓</span>
    <h2 class="postRegister_text__17jg3">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "InputTitle",
  props: {
    title: String,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.postRegister_postContentWrapper__3BXZ6 {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 36px;
  border-bottom: 3px solid #f2f2f2;
}
.postRegister_sequence__nC1Px {
  margin-right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ffcd00;
  font-size: 20px;
  font-weight: 700;
  line-height: 19px;
  color: #fff;
}
.postRegister_text__17jg3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.05em;
  margin: 0;
}
@media screen and (max-width: 575px) {
  .postRegister_postContentWrapper__3BXZ6 {
    padding: 8px;
  }
  .postRegister_sequence__nC1Px {
    margin-right: 6px;
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
  .postRegister_text__17jg3 {
    font-size: 16px;
  }
}
</style>
