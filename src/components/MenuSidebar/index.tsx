import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Image, Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./MenuSidebar.module.scss";
import images from "@/assets/images";
import {
    DashboardIcon03,
    Element4,
    LogoutIcon,
    Monitor,
    MoreIcon,
    ReportIcon,
    ServiceIcon,
    SettingIcon,
} from "@/components/Icons";
import { useAppDispatch } from "@/redux/store";
import pathSlice from "@/redux/slices/pathSlice";
import { pathSelectors } from "@/redux/selectors";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps["items"] = [
    getItem("Dashboard", "Dashboard", <Element4 />),
    getItem("Thiết bị", "Thiết bị", <Monitor />),
    getItem("Dịch vụ", "Dịch vụ", <ServiceIcon />),
    getItem("Cấp số", "Cấp số", <DashboardIcon03 />),
    getItem("Báo cáo", "Báo cáo", <ReportIcon />),
    getItem("Cài đặt hệ thống", "Cài đặt hệ thống", <SettingIcon />, [
        getItem("Quản lý vai trò", "Quản lý vai trò"),
        getItem("Quản lý tài khoản", "Quản lý tài khoản"),
        getItem("Nhật ký người dùng", "Nhật ký người dùng"),
    ]),
];

function MenuSidebar() {
    const { path } = useSelector(pathSelectors);
    const dispatch = useAppDispatch();
    const [selectedKey, setSelectedKey] = useState("Dashboard");
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedKey(path[path.length - 1].name);
    }, [path]);
    const handleSelectItem: MenuProps["onClick"] = (e) => {
        if (
            e.key === "Quản lý vai trò" ||
            e.key === "Quản lý tài khoản" ||
            e.key === "Nhật ký người dùng"
        ) {
            dispatch(
                pathSlice.actions.setPath({
                    name: "Cài đặt hệ thống",
                    link: "",
                })
            );

            dispatch(
                pathSlice.actions.appendPath({
                    name: e.key,
                    link: convertPath(e.key),
                })
            );
        } else
            dispatch(
                pathSlice.actions.setPath({
                    name: e.key,
                    link: convertPath(e.key),
                })
            );

        navigate(convertPath(e.key));
    };
    const convertPath = (key: string) => {
        let path = "";
        switch (key) {
            case "Dashboard":
                path = "/dashboard";
                break;
            case "Thiết bị":
                path = "/equipment";
                break;
            case "Dịch vụ":
                path = "/services";
                break;
            case "Cấp số":
                path = "/numerical-order";
                break;
            case "Báo cáo":
                path = "/report";
                break;
            case "Quản lý vai trò":
                path = "/settings/role-management";
                break;
            case "Quản lý tài khoản":
                path = "/settings/account-management";
                break;
            case "Nhật ký người dùng":
                path = "/settings/logs-management";
                break;
        }

        return path;
    };

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className={cx("wrapper")}>
            <Image srcSet={`${images.logoDashboard} 2x`} preview={false} />
            <Menu
                className={cx("menubar")}
                onClick={handleSelectItem}
                mode="vertical"
                items={items}
                expandIcon={<MoreIcon />}
                selectedKeys={[selectedKey]}
            />
            <Button
                onClick={handleLogout}
                className={cx("btn-logout")}
                icon={<LogoutIcon />}
            >
                Đăng xuất
            </Button>
        </div>
    );
}

export default MenuSidebar;
