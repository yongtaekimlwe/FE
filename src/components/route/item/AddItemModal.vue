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
          <b-form-group
            label="이메일"
            label-for="email-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
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
        id="modal-prevent-closing"
        ref="modal"
        title="여행지 추가하기"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label="여행지 이름" label-for="attraction-input" :state="nameState">
            <b-form-input
              id="attraction-input"
              v-model="attraction"
              :state="attractionState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailState: null,
      attraction: "",
      attractionState: null,
    };
  },
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
      // Push the name to submitted names
      //   this.submittedNames.push(this.name);
      // Hide the modal manually
      //   this.$nextTick(() => {
      //     this.$bvModal.hide("modal-prevent-closing");
      //   });
    },
  },
};
</script>
