import Home from "../pages/Home"
import Login from "../pages/Login"
import Product from "../pages/Product"
import Products from "../pages/Products"
import Profile from "../pages/Profile"

export const protectedRoutes = [
    { path: '/products', element: Products },
    { path: '/product/:id', element: Product },
    { path: '/profile', element: Profile },
]

export const appRoutes = [
    { path: '/', element: Home },
    { path: '/login', element: Login },
]