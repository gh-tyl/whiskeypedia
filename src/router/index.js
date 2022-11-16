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
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/cocktails",
    name: "Cocktails",
    component: CocktailsPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
