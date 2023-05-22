const routes = [
    {
        path: "/user",
        name: "user",
        component: () => import(/* webpackChunkName: "route" */ "@/views/UserView.vue"),
        children: [
          {
            path: "join",
            name: "join",
            component: () => import(/* webpackChunkName: "route" */ "@/components/user/UserRegister"),
          },
          {
            path: "login",
            name: "login",
            component: () => import(/* webpackChunkName: "route" */ "@/components/user/UserLogin"),
          },
          {
            path: "mypage",
            name: "mypage",
            component: () => import(/* webpackChunkName: "route" */ "@/components/user/MyPage"),
          },
        ],
      },
];
  
export default routes;