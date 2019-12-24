import Vue from "vue";
import VueRouter from "vue-router";
import PokemonGrid from "@/components/PokemonGrid.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "pokemon-grid",
    component: PokemonGrid
  }
];

const router = new VueRouter({
  routes
});

export default router;
