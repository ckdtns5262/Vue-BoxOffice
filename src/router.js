import { createWebHistory, createRouter } from "vue-router";
import MovieList from '../src/components/MovieList'
const routes = [
  {
    path: "/movielist",
    component: MovieList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;