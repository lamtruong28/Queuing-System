import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { Image, Typography, Input, Space, Button } from "antd";
import images from "../../assets/images";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Đăng nhập";
    }, []);

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("content-left")}>
                <div className={cx("content-left__wrap")}>
                    <img className={cx("logo")} srcSet={`${images.logo} 2x`} />
                    <div>
                        <label htmlFor={cx("user-name")}>Tên đăng nhập *</label>
                        <Input
                            id={cx("user-name")}
                            status={error && "error"}
                            className={cx("input")}
                        />
                        <label htmlFor={cx("password")}>Mật khẩu *</label>
                        <Input.Password
                            id={cx("password")}
                            placeholder="Input password"
                            status={error && "error"}
                            className={cx("input")}
                        />
                        {error ? (
                            <p className={cx("error-message")}>
                                <Image
                                    className={cx("icon-warning")}
                                    src={images.warning}
                                    preview={false}
                                />
                                <span>{error}</span>
                            </p>
                        ) : (
                            <Link
                                to={"/forgot-pass"}
                                className={cx("forgot-pass")}
                            >
                                Quên mật khẩu?
                            </Link>
                        )}
                    </div>

                    <div className="d-flex-center d-flex-column">
                        <Button
                            size={"large"}
                            className={cx("btn-login")}
                            onClick={handleLogin}
                        >
                            Đăng nhập
                        </Button>
                        {error && (
                            <Link
                                to={"/forgot-pass"}
                                className={cx("forgot-pass")}
                            >
                                Quên mật khẩu?
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx("content-right")}>
                <Image srcSet={`${images.group341} 2x`} preview={false} />
                <div className={cx("title")}>
                    <h2 className={cx("system")}>Hệ thống</h2>
                    <h1 className={cx("heading")}>QUẢN LÝ XẾP HÀNG</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;
