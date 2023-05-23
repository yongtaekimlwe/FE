<template>
  <div class="postRegister_postContentWrapper__3BXZ6">
    <span class="postRegister_sequence__nC1Px">✓</span>
    <h2 class="postRegister_text__17jg3">
      영상 콘텐츠, Youtube에서 더 알아보기
    </h2>
    <div>
      <b-button v-b-toggle.sidebar-right class="button-color">Click!</b-button>
      <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttractionYoutube",
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

.button-color {
  background-color: #df5000;
  outline: none;
}
</style>
