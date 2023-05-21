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
      {
        path: "detail/:id",
        name: "picturedetail",
        component: () => import("@/components/picture/PictureDetail"),
      },
      {
        path: "update/:id",
        name: "pictureupdate",
        component: () => import("@/components/picture/PicturePost"),
      },
      {
        path: "delete/:id",
        name: "picturedelete",
        component: () => import("@/components/picture/PictureDelete"),
      },
    ],
  },
];

export default routes;
