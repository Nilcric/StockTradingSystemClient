import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: "/Home",
        },
        {
            path: "/Home",
            name: "Home",
            component: () => import('./views/Home')
        },
        {
            path: "/Login",
            name: "Login",
            component: () => import('./views/Login')
        },
        {
            path: "/OpenAccount",
            name: "OpenAccount",
            component: () => import('./views/OpenAccount')
        },
        {
            path: "/Stock",
            name: "Stock",
            component: () => import('./views/Stock')
        },
        {
            path: "/Finance",
            name: "Finance",
            component: () => import('./views/Finance')
        },
        {
            path: "/Buy",
            name: "Buy",
            component: () => import('./views/Buy')
        },
        {
            path: "/Buy/:id",
            name: "BuyByID",
            component: () => import('./views/Buy')
        },
        {
            path: "/Sell",
            name: "Sell",
            component: () => import('./views/Sell')
        },
        {
            path: "/Sell/:id",
            name: "SellByID",
            component: () => import('./views/Sell')
        },
        {
            path: "/Search",
            name: "Search",
            component: () => import('./views/Search')
        },
        {
            path: "/Command",
            name: "Command",
            component: () => import('./views/Command')
        },
        {
            path: "/Alert",
            name: "Alert",
            component: () => import('./views/Alert')
        }
    ]
})
