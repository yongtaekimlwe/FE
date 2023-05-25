import axios from "axios";

// 사용자 관련
function userInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_USER_BASE_URL,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      return instance;
}

// 여행 경로
function routeInstance() {
  const instance = axios.create({
      baseURL: process.env.VUE_APP_ROUTE_BASE_URL,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    
    return instance;
}

function hashtagInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_HASHTAG_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { userInstance, routeInstance, hashtagInstance  };