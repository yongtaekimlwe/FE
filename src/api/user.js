import { userInstance } from "./index.js";

const user = userInstance();

async function kakaoLogin(code, success, fail) {
  // console.log(code);
  await user.get(`/kakao/token?code=${code}`).then(success).catch(fail);
}

async function join(newUser, success, fail) {
  await user.post(`/join`, JSON.stringify(newUser)).then(success).catch(fail);
}
async function login(loginUser, success, fail) {
  await user.post(`/login`, JSON.stringify(loginUser)).then(success).catch(fail);
}

async function findById(userId, success, fail) {
  user.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await user.get(`/info/${userId}`).then(success).catch(fail);
}

async function update(loginUser, success, fail) {
  await user.post(`/update`, JSON.stringify(loginUser)).then(success).catch(fail);
}

async function deleteUser(userId, success, fail) {
  await user.delete(`/${userId}`).then(success).catch(fail);
}

export { kakaoLogin, join, login, findById, update, deleteUser };
