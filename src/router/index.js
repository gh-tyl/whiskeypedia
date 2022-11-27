import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/home/HomePage.vue";
import ProductsPage from "../components/products/ProductsPage.vue";
import CocktailsPage from "../components/cocktails/CocktailsPage.vue";
import ContactPage from "../components/contact/ContactPage.vue";
import ProfilePage from "../components/profile/ProfilePage.vue";
import CartPage from "../components/cart/CartPage.vue";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/products",
    name: "products-page",
    component: ProductsPage,
  },
  {
    path: "/cocktails",
    name: "cocktails-page",
    component: CocktailsPage,
  },
  {
    path: "/contact",
    name: "contact-page",
    component: ContactPage,
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage,
  },
  {
    path: "/cart",
    name: "cart-page",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
