import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Button, Avatar } from "antd";
import styles from "./Topbar.module.scss";
import { NotificationIcon } from "@/components/Icons";
import images from "@/assets/images";
import Path from "../Path";
import { useAppDispatch } from "@/redux/store";
import pathSlice from "@/redux/slices/pathSlice";
import Tippy from "@tippyjs/react/headless";
import Notification from "../Notification";
import { useState } from "react";

const cx = classNames.bind(styles);

function Topbar() {
    const [clicked, setClicked] = useState(false);
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
                {/* Wrap tag div in order to fix tippy warning  */}
                <div>
                    <Tippy
                        render={(attrs) => (
                            <div className="box" tabIndex={-1} {...attrs}>
                                <Notification />
                            </div>
                        )}
                        delay={[100, 200]}
                        trigger="click"
                        placement="bottom-start"
                        interactive={true}
                        offset={[242, 27]}
                    >
                        <Button
                            className={cx("btn-notify", clicked && "clicked")}
                            shape={"circle"}
                            onClick={() => setClicked(!clicked)}
                        >
                            <NotificationIcon />
                        </Button>
                    </Tippy>
                </div>
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
