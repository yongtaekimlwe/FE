const routes = [
  {
    path: "/picture",
    name: "picture",
    component: () => import("@/views/PictureView"),
    redirect: "/picture/list",
    children: [
      {
        path: "list",
        name: "picturelist",
        component: () => import("@/components/picture/PictureList"),
      },
      {
        path: "post",
        name: "picturepost",
        component: () => import("@/components/picture/PicturePost"),
      },
    ],
  },
];

export default routes;
