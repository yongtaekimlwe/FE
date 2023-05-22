<template>
  <div id="app">
    <h4>지금 <strong>Bon Voyage</strong>를 시작하세요!</h4>
    <div class="login">
      <b-form id="login" method="get">
        <input type="text" id="Uid" placeholder="아이디" v-model="userId" />
        <br /><br />
        <input type="Password" id="Pass" placeholder="비밀번호" v-model="password" />
        <br /><br />
        <img id="kakaoLogin" src="@/assets/kakao_login_medium.png" />
        <br /><br />
        <b-button id="loginBtn" variant="outline-dark">로그인</b-button>
        <br /><br />
        <div id="find">
          <router-link to="findId">아이디 찾기</router-link> |
          <router-link to="find">비밀번호 찾기</router-link>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      password: "",
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
  top: 40%;
  color: rgb(109, 109, 109);
  padding: 20px;
}
#Uid {
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

#kakaoLogin {
  position: absolute;
  left: 40%;
  top: 100%;
}

#loginBtn {
  position: absolute;
  left: 53%;
  top: 100%;
  width: 90px;
  height: 45px;
}

#find {
  position: absolute;
  left: 43%;
  top: 120%;
  color: rgb(109, 109, 109);
  font-size: 13px;
}
</style>
