<template>
  <div id="app">
    <b-avatar id="avatar" :src="profileImgSrc" size="5rem"></b-avatar>
    <div class="login">
      <b-form id="login" method="get">
        <input :disabled="!modify" type="text" id="Uid" placeholder="아이디" v-model="userId" />
        <br /><br />
        <input
          :disabled="!modify"
          type="email"
          id="email"
          placeholder="이메일"
          v-model="userEmail"
        />
        <input :disabled="!modify" type="text" id="name" placeholder="이름" v-model="name" />
        <input
          v-if="!modify"
          :disabled="!modify"
          type="password"
          id="password"
          placeholder="비밀번호"
          v-model="password"
        />
        <input
          v-if="modify"
          :disabled="!modify"
          type="text"
          id="password"
          placeholder="비밀번호"
          v-model="password"
        />
        <br /><br />
        <b-button
          id="modifyBtn"
          variant="outline-dark"
          v-if="!modify"
          v-b-modal.modal-prevent-closing
          >회원 정보 수정</b-button
        >
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="현재 비밀번호를 입력하세요."
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group :state="nameState">
              <b-form-input id="name-input" v-model="checkPassword" required></b-form-input>
            </b-form-group>
          </form>
        </b-modal>

        <b-button id="modifyBtn" variant="outline-dark" v-if="modify" @click="userUpdate()"
          >회원 정보 저장</b-button
        >
        <br /><br />
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modify: false,
      userId: "duckduck",
      userEmail: "duck@duck.com",
      name: "박꽥꽥",
      password: "1234",
      profileImgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5c6VkPCiNvUmomb-iGTLqP76uu9FOsJWRpg&usqp=CAU",
      checkPassword: "",
    };
  },
  methods: {
    toggleStat() {
      this.modify = !this.modify;
    },
    userCheck() {
      //TODO: 사용자 비밀번호가 맞는지 확인하기
    },
    userUpdate() {
      this.toggleStat();
      // TODO: 사용자 정보 update하기
    },
    // 모달 관련 함수
    resetModal() {
      this.checkPassword = "";
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // TODO: 비밀번호 일치하는지 보기
      if (this.checkPassword == this.password) {
        this.toggleStat();
      }
      // Push the name to submitted names
      //   this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<style scoped>
a,
a:hover,
a:link,
a:visited {
  text-decoration: none;
  color: rgb(109, 109, 109);
  font-weight: 100;
}

#app {
  position: relative;
  margin: 0;
  padding: 0;
}
.login {
  overflow: hidden;
  margin: auto;
  padding: 80px;
}

#avatar {
  position: absolute;
  left: 46%;
  top: 30%;
}

#name {
  position: absolute;
  left: 35%;
  top: 65%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#Uid {
  position: absolute;
  left: 35%;
  top: 85%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#email {
  position: absolute;
  left: 35%;
  top: 105%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#password {
  position: absolute;
  left: 35%;
  top: 125%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#modifyBtn {
  position: absolute;
  left: 43%;
  top: 145%;
  width: 150px;
  height: 45px;
}
</style>
