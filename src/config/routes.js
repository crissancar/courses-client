import LayoutBasic from "../layouts/LayoutBasic";

import BasicHome from "../pages/Basic/Home";
import BasicContact from "../pages/Basic/Contact";
import Error404 from '../pages/Error404';

const routes = [
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: BasicHome,
        exact: true,
      },
      {
        path: "/contact",
        component: BasicContact,
        exact: true,
      },
      {
        component: Error404
      }
    ]
  }
];

export default routes;