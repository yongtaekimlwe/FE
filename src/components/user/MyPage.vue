<template>
  <div id="app" class="container">
    <div class="row justify-content-center">
      <b-avatar id="avatar" :src="userInfo.imgSrc" size="7rem"></b-avatar>
    </div>
    <div class="login">
      <b-form id="login" method="get">
        <div class="row justify-content-center">
          <input
            :disabled="!modify"
            type="email"
            id="email"
            placeholder="이메일"
            v-mod
            v-model="userInfo.email"
          />
        </div>
        <div class="row justify-content-center">
          <input
            :disabled="!modify"
            type="text"
            id="name"
            placeholder="이름"
            v-model="userInfo.name"
          />
        </div>
        <div class="row justify-content-center">
          <input
            v-if="userInfo.password && !modify"
            :disabled="!modify"
            type="password"
            id="password"
            placeholder="비밀번호"
            v-model="userInfo.password"
          />
          <input
            v-if="modify"
            :disabled="!modify"
            type="text"
            id="password"
            placeholder="비밀번호"
            v-model="userInfo.password"
          />
        </div>
        <div class="row justify-content-center">
          <b-button
            id="modifyBtn"
            variant="outline-dark"
            v-if="userInfo.password && !modify"
            v-b-modal.modal-prevent-closing
            >회원 정보 수정</b-button
          >
        </div>
        <div class="row justify-content-center" v-if="!userInfo.password">
          <div id="kakaoUser">카카오로 회원가입한 사용자 입니다.</div>
        </div>
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="현재 비밀번호를 입력하세요."
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group>
              <b-form-input id="name-input" v-model="checkPassword" required></b-form-input>
            </b-form-group>
          </form>
        </b-modal>

        <b-button id="modifyBtn" variant="outline-dark" v-if="modify" @click="userUpdate()"
          >회원 정보 저장</b-button
        >
        <div class="row justify-content-center">
          <div id="quit" @click="quitUser">회원 탈퇴</div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      modify: false,
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
    quitUser() {
      // TODO: 회원 탈퇴
      this.$router.push("/").catch(() => {});
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
  computed: {
    ...mapState(userStore, ["userInfo"]),
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
  padding: 10%;
}

.login {
  overflow: hidden;
  margin: auto;
}

.row {
  padding: 5px;
}

#name {
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#Uid {
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#email {
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#password {
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#modifyBtn {
  width: 150px;
  height: 45px;
  margin: 5px;
}

#kakaoUser {
  color: rgb(109, 109, 109);
}

#quit {
  color: rgb(109, 109, 109);
  font-size: 13px;
}
</style>
