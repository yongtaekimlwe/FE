<template>
  <div>
    <div v-b-modal.modal-prevent-closing>
      <div v-if="add == 'addMember'">멤버 추가하기</div>
      <div v-else>
        <font-awesome-icon :icon="['fas', 'circle-plus']" style="color: #dedede" />
      </div>
    </div>

    <!-- 이름 추가하기 -->
    <div v-if="add == 'addMember'">
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="멤버 추가하기"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label="이메일" label-for="email-input" invalid-feedback="Name is required">
            <b-form-input
              id="email-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>

    <!-- 여행지 추가하기 -->
    <div v-else>
      <b-modal
        scrollable
        id="modal-prevent-closing"
        ref="modal"
        title="여행지 추가하기"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label="여행지" label-for="attraction-input" class="input-label">
            <!-- 여행지 검색 -->
            <section>
              <input
                type="text"
                id="c"
                v-model="attraction"
                placeholder="Enter Destination"
                :state="attractionState"
                class="input-field"
                required
              />
            </section>
            <br />
            <!-- 여행지 유형 선택 -->
            <section>
              <b-form-select
                id="content-options"
                v-model="content"
                class="input-field"
                required
                :options="[
                  { text: 'Choose...', value: null },
                  { text: '관광지', value: 12 },
                  { text: '문화시설', value: 14 },
                  { text: '축제공연행사', value: 15 },
                  { text: '여행코스', value: 25 },
                  { text: '레포츠', value: 28 },
                  { text: '숙박', value: 32 },
                  { text: '쇼핑', value: 38 },
                  { text: '음식점', value: 39 },
                ]"
                :value="null"
              ></b-form-select>
            </section>
            <!-- 검색 버튼 -->
            <div class="input-wrapper">
              <br />
              <button type="submit" class="btn btn-secondary">검색하기</button>
            </div>
          </b-form-group>
        </form>
        <!-- 여행지 보여주기 -->
        <section>------</section>
      </b-modal>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      email: "",
      emailState: null,
      attraction: "",
      attractionState: null,
    };
  },
  components: {},
  props: {
    add: String,
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.emailState = valid;
      this.attractionState = valid;
      return valid;
    },
    resetModal() {
      this.email = "";
      this.emailState = null;
      this.attraction = "";
      this.attractionState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
    },
  },
};
</script>

<style scoped>
.input-label {
  color: #fff;
  font-size: 15px;
  margin-bottom: 5px;
  display: block;
}

.input-field {
  background: #fff;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 50px;
  width: 100%;
}

.input-field::placeholder {
  color: #999;
}

#content-options {
  height: 100%;
}

.input-wrapper {
  flex: 1;
  margin-left: 80%;
  margin-bottom: 10px;
}
</style>
