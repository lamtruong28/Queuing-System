import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { Image, Typography, Input, Space, Button } from "antd";
import images from "../../assets/images";
import styles from "./ForgotPass.module.scss";

const cx = classNames.bind(styles);

function ForgotPass() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Quên mật khẩu";
    }, []);

    const handleContinue = () => {
        navigate("/reset-pass");
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("content-left")}>
                <div className={cx("content-left__wrap")}>
                    <img className={cx("logo")} srcSet={`${images.logo} 2x`} />
                    <div className="d-flex-center d-flex-column">
                        <h3 className={cx("title")}>Đặt lại mật khẩu</h3>
                        <span className={cx("content")}>
                            Vui lòng nhập email để đặt lại mật khẩu của bạn *
                        </span>
                        <Input className={cx("input")} />
                    </div>

                    <div className={cx("wrap-button", "d-flex-center")}>
                        <Button size={"large"} className={cx("btn-cancel")}>
                            <Link to={"/login"}>Hủy</Link>
                        </Button>
                        <Button
                            size={"large"}
                            className={cx("btn-continue")}
                            onClick={handleContinue}
                        >
                            Tiếp tục
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

export default ForgotPass;
