import { Routes, Route } from "react-router-dom";
import { Fragment, ReactNode } from "react";
import config from "./configs";
import Login from "./pages/Login";
import { routes } from "./routes";
import MainLayout from "./layouts/MainLayout";
import { MainLayoutProps } from "./interfaces";

type LayoutProps = {
    Layout: JSX.Element | ReactNode;
};

function App() {
    return (
        <div className="App">
            <Routes>
                {routes.map((route, index) => {
                    const Layout = route.layout ? route.layout : Fragment;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
