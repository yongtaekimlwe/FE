<template>
  <div></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const userStore = "userStore";

export default {
  data() {
    return {
      code: "",
    };
  },
  created() {
    this.code = this.$route.query.code;
    if (this.code) {
      this.kakaoLogin();
    } else {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(userStore, ["userKakaoLogin"]),

    async kakaoLogin() {
      await this.userKakaoLogin(this.code);
      //   await http.get(`/user/kakao/token?code=${this.code}`).then(({ data }) => {
      //     console.log(data);

      //     // TODO: vuex에 저장하기

      //     this.$router.push({ name: "home" });
      //   });
    },
  },
};
</script>

<style></style>
