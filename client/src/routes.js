import Admin from "./pages/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, DOSTAVKA_ROUTE, SHOPE_BALLS_ROUTE, SHOPE_CHRISTMAS_DECORATIONS_ROUTE, SHOPE_ELECTRIC_GARLANDS_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOPE_VIST_YELKI_ROUTE, REGISTRATION_ROUTE, SHOPE_ISKUS_YELKI_ROUTE, SHOP_ROUTE, FAVORITE_ROUTE, SEARCH_ROUTE, CHECKOUT_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Favorite from "./pages/Favorite";
import DevicePage from "./pages/DevicePage";
import ShopIskustvenyelki from "./pages/ShopIskustvenyelki";
import Searh from "./pages/Searh";
import Checkout from "./pages/Checkout";
import ShopVisokirElki from "./pages/ShopVisokirElki";
import ShopElectricGarlands from "./pages/ShopElectricGarlands";
import ShopBalls from "./pages/ShopBalls";
import ShopChristmasDecorations from "./pages/ShopChristmasDecorations";
import Dostavka from "./pages/Dostavka";
import { Home } from "./pages/Home";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CHECKOUT_ROUTE,
        Component: Checkout
    },
    {
        path: SEARCH_ROUTE,
        Component: Searh
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: SHOPE_ISKUS_YELKI_ROUTE,
        Component: ShopIskustvenyelki
    },
    {
        path: SHOPE_VIST_YELKI_ROUTE,
        Component: ShopVisokirElki
    },
    {
        path: SHOPE_ELECTRIC_GARLANDS_ROUTE,
        Component: ShopElectricGarlands
    },
    {
        path: SHOPE_BALLS_ROUTE,
        Component: ShopBalls
    },
    {
        path: SHOPE_CHRISTMAS_DECORATIONS_ROUTE,
        Component: ShopChristmasDecorations
    },
    {
        path: DOSTAVKA_ROUTE,
        Component: Dostavka
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
