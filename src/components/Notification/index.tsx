import classNames from "classnames/bind";
import CardNotify from "./CardNotify";
import styles from "./Notification.module.scss";

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <span>Thông báo</span>
            </header>
            <div className={cx("list-notify")}>
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
                <CardNotify
                    name="Nguyễn Thị Thùy Dung"
                    time="12h20 ngày 30/11/2021"
                />
            </div>
        </div>
    );
}

export default Notification;
