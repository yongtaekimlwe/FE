<template>
  <div id="app">
    <h4>지금 <strong>Bon Voyage</strong>를 시작하세요!</h4>
    <div class="login">
      <b-form id="login" method="get">
        <input type="text" id="Uid" placeholder="아이디" v-model="userId" />
        <br /><br />
        <input type="text" id="name" placeholder="이름" v-model="userName" />
        <br /><br />
        <input type="Password" id="Pass" placeholder="비밀번호" v-model="password" />
        <br /><br />
        <input type="email" id="Email" placeholder="이메일" v-model="email" />
        <br /><br />
        <a :href="Kakao_AUTH_URI">
          <img id="kakaoLogin" src="@/assets/kakao_login_medium.png" />
        </a>
        <br /><br />
        <b-button id="loginBtn" variant="outline-dark">회원가입</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Kakao_AUTH_URI: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAOLOGIN_KEY}&redirect_uri=${process.env.VUE_APP_REDIRECT_URL}&response_type=code`,
      userId: "",
      userName: "",
      password: "",
      email: "",
    };
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
h4 {
  position: absolute;
  left: 30%;
  top: 25%;
  color: rgb(109, 109, 109);
  padding: 20px;
}
#Uid {
  position: absolute;
  left: 35%;
  top: 50%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
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

#Pass {
  position: absolute;
  left: 35%;
  top: 80%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#Email {
  position: absolute;
  left: 35%;
  top: 95%;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5%;
  padding-left: 8px;
}

#kakaoLogin {
  position: absolute;
  left: 40%;
  top: 115%;
}

#loginBtn {
  position: absolute;
  left: 53%;
  top: 115%;
  width: 90px;
  height: 45px;
}
</style>
