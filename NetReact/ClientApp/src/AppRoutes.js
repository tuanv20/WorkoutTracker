import WorkoutList from "./components/Items/WorkoutList";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/todolist',
      element: <WorkoutList />
  },
];

export default AppRoutes;
