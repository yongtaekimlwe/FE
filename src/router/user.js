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
            path: "modify",
            name: "routeModify",
            component: () => import(/* webpackChunkName: "route" */ "@/components/user/UserMyPage"),
          },
        ],
      },
];
  
export default routes;