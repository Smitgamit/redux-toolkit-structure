import Home from "../pages/Home"
import Products from "../pages/Products"

export const protectedRoutes = [
    { path: '/products', element: Products },
]

export const appRoutes = [
    { path: '/', element: Home },
]