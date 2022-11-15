import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Button, Avatar } from "antd";
import styles from "./Topbar.module.scss";
import { NotificationIcon } from "@/components/Icons";
import images from "@/assets/images";
import Path from "../Path";
import { useAppDispatch } from "@/redux/store";
import pathSlice from "@/redux/slices/pathSlice";

const cx = classNames.bind(styles);

function Topbar() {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(
            pathSlice.actions.setPath({
                name: "Thông tin cá nhân",
                link: "/profile",
            })
        );
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("path")}>
                <Path />
            </div>
            <div className={cx("user-wrap")}>
                <Button className={cx("btn-notify")}>
                    <NotificationIcon />
                </Button>
                <Link
                    to="/profile"
                    onClick={handleClick}
                    className="d-flex-center"
                >
                    <Avatar className={cx("avatar")} src={images.avatar} />
                    <div className={cx("info")}>
                        <span className={cx("greet")}>Xin chào</span>
                        <p className={cx("user-name")}>Lê Quỳnh Ái Vân</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Topbar;
