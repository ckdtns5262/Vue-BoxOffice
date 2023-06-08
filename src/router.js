import { createWebHistory, createRouter } from "vue-router";
import MovieInfo from './components/MovieInfo'
import MovieChart from './components/MovieChart'
import Content from './components/Content'
const routes = [
  {
    path : '/',
    component : Content
  },
  {
    path: "/movielist/:id",
    component: MovieInfo,
  },
  {
    path : "/moviechart",
    component : MovieChart
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;