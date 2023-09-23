import Todolist from "./components/Todolist/Todolist";
import Itemlist from "./components/Items/ItemCollection"
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/todolist',
      element: <Todolist />
  },
  {
      path: '/itemList',
      element: <Itemlist />
  },
];

export default AppRoutes;
