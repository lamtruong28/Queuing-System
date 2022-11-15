import images from "@/assets/images";
import { CameraIcon } from "@/components/Icons";
import { Avatar, Input, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("user-avatar")}>
                <div className={cx("wrap-avatar")}>
                    <Avatar className={cx("avatar")} src={images.avatar} />
                    <CameraIcon className={cx("icon-camera")} />
                </div>
                <Typography.Title className={cx("name")} level={2}>
                    Lê Quỳnh Ái Vân
                </Typography.Title>
            </div>
            <div className={cx("user-info")}>
                <div className={cx("wrap-info")}>
                    <Typography.Text className={cx("title")}>
                        Tên người dùng
                    </Typography.Text>
                    <Input disabled={true} value={"Lê Quỳnh Ái Vân"} />
                </div>
                <div className={cx("wrap-info")}>
                    <Typography.Text className={cx("title")}>
                        Tên đăng nhập
                    </Typography.Text>
                    <Input disabled={true} value={"lequynhaivan01"} />
                </div>
                <div className={cx("wrap-info")}>
                    <Typography.Text className={cx("title")}>
                        Số điện thoại
                    </Typography.Text>
                    <Input disabled={true} value={"0767375921"} />
                </div>
                <div className={cx("wrap-info")}>
                    <Typography.Text className={cx("title")}>
                        Mật khẩu
                    </Typography.Text>
                    <Input disabled={true} value={"311940211"} />
                </div>
                <div className={cx("wrap-info")}>
                    <Typography.Text className={cx("title")}>
                        Email:
                    </Typography.Text>
                    <Input disabled={true} value={"adminSSO1@domain.com"} />
                </div>
                <div className={cx("wrap-info")}>
                    <Typography.Text className={cx("title")}>
                        Vai trò:
                    </Typography.Text>
                    <Input disabled={true} value={"Kế toán"} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
