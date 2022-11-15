import SecondaryLayout from "@/layouts/SecondaryLayout";
import OnlySidebarLayout from "@/layouts/SecondaryLayout";
import Equipment from "@/pages/Equipment";
import Profile from "@/pages/Profile";
import Report from "@/pages/Report";
import Service from "@/pages/Service";
import config from "../configs";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import ForgotPass from "../pages/ForgotPass";
import Login from "../pages/Login";
import ResetPass from "../pages/ResetPass";

export const routes = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.forgotPass, component: ForgotPass, layout: null },
    { path: config.routes.resetPass, component: ResetPass, layout: null },
    { path: config.routes.dashboard, component: Dashboard, layout: MainLayout },
    {
        path: config.routes.profile,
        component: Profile,
        layout: OnlySidebarLayout,
    },
    {
        path: config.routes.equipment,
        component: Equipment,
        layout: SecondaryLayout,
    },
    {
        path: config.routes.service,
        component: Service,
        layout: SecondaryLayout,
    },
    { path: config.routes.report, component: Report, layout: SecondaryLayout },
];
