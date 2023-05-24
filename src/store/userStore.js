// import jwtDecode from "jwt-decode";
import router from "@/router";
import { kakaoLogin } from "@/api/user";

const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isValidToken: false,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
    checkToken: function (state) {
      return state.isValidToken;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_IS_VALID_TOKEN: (state, isValidToken) => {
      state.isValidToken = isValidToken;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userKakaoLogin({ commit }, code) {
      await kakaoLogin(
        code,
        ({ data }) => {
          if (data.email) {
            commit("SET_IS_LOGIN", true);
              commit("SET_IS_LOGIN_ERROR", false);
              commit("SET_USER_INFO", data);
            router.push({ name: "home" });
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
      },
      async userLogout({ commit }) {
        commit("SET_IS_LOGIN", false);
        commit("SET_USER_INFO", null);
        commit("SET_IS_VALID_TOKEN", false);
      }
    // async getUserInfo({ commit, dispatch }, token) {
    //   let decodeToken = jwtDecode(token);
    //   // console.log("2. getUserInfo() decodeToken :: ", decodeToken);
    //   await findById(
    //     decodeToken.userid,
    //     ({ data }) => {
    //       if (data.message === "success") {
    //         commit("SET_USER_INFO", data.userInfo);
    //         // console.log("3. getUserInfo data >> ", data);
    //       } else {
    //         console.log("유저 정보 없음!!!!");
    //       }
    //     },
    //     async (error) => {
    //       console.log("getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ", error.response.status);
    //       commit("SET_IS_VALID_TOKEN", false);
    //       await dispatch("tokenRegeneration");
    //     }
    //   );
    // },
    // async userLogout({ commit }, userid) {
    //   await logout(
    //     userid,
    //     ({ data }) => {
    //       if (data.message === "success") {
    //         commit("SET_IS_LOGIN", false);
    //         commit("SET_USER_INFO", null);
    //         commit("SET_IS_VALID_TOKEN", false);
    //       } else {
    //         console.log("유저 정보 없음!!!!");
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // },
  },
};

export default memberStore;
