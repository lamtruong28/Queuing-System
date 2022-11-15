import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { Image, Typography, Input, Space, Button } from "antd";
import images from "../../assets/images";
import styles from "./ResetPass.module.scss";

const cx = classNames.bind(styles);

function ResetPass() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Đặt lại mật khẩu mới";
    }, []);

    const handleResetPass = () => {
        navigate("/login");
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content-left")}>
                <div className={cx("content-left__wrap")}>
                    <img className={cx("logo")} srcSet={`${images.logo} 2x`} />
                    <div className="d-flex-center d-flex-column">
                        <h3 className={cx("title")}>Đặt lại mật khẩu mới</h3>
                        <div>
                            <label htmlFor={cx("password")}>Mật khẩu</label>
                            <Input.Password
                                id={cx("password")}
                                status={error && "error"}
                                className={cx("input")}
                            />
                            <label
                                htmlFor={cx("confirm")}
                                className={cx("confirm")}
                            >
                                Nhập lại mật khẩu
                            </label>
                            <Input.Password
                                id={cx("confirm")}
                                status={error && "error"}
                                className={cx("input")}
                            />
                        </div>
                    </div>

                    <div className={cx("wrap-button", "d-flex-center")}>
                        <Button
                            size={"large"}
                            className={cx("btn-confirm")}
                            onClick={handleResetPass}
                        >
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx("content-right")}>
                <Image srcSet={`${images.frame} 2x`} preview={false} />
            </div>
        </div>
    );
}

export default ResetPass;
