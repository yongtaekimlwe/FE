const routes = [
    {
        path: "/route",
        name: "route",
        component: () => import(/* webpackChunkName: "route" */ "@/views/Route.vue"),
        redirect: "/route/list",
        children: [
          {
            path: "list",
            name: "routeList",
            component: () => import(/* webpackChunkName: "route" */ "@/components/route/RouteList"),
          },
          {
            path: "write",
            name: "routeWrite",
            component: () => import(/* webpackChunkName: "route" */ "@/components/route/RouteWrite"),
          },
          {
            path: "view/:routeId",
            name: "routeView",
            component: () => import(/* webpackChunkName: "route" */ "@/components/route/RouteView"),
          },
          {
            path: "modify",
            name: "routeModify",
            component: () => import(/* webpackChunkName: "route" */ "@/components/route/RouteModify"),
          },
        ],
      },
];
  
export default routes;