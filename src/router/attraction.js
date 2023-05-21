const routes = [
  {
    path: "/attraction",
    name: "attraction",
    component: () => import("@/views/AttractionView"),
    redirect: "/attraction/list",
    children: [
      {
        path: "list",
        name: "attractionlist",
        component: () => import("@/components/attraction/AttractionList"),
      },
    ],
  },
];

export default routes;
