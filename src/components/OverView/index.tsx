import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Avatar, Button, Typography } from "antd";
import styles from "./OverView.module.scss";
import images from "@/assets/images";
import { Monitor, NotificationIcon } from "@/components/Icons";
import Chart from "react-apexcharts";
import DatePicker from "../DatePicker";

const cx = classNames.bind(styles);

function OverView() {
    return (
        <div className={cx("wrapper")}>
            <h2 className="title">Tổng quan</h2>
            <div className={cx("equipment")}>
                <div className={cx("doughnut")}>
                    <Chart
                        series={[44, 55]}
                        options={{}}
                        width={"100%"}
                        height={"100%"}
                        type="radialBar"
                    />
                </div>
                <div className={cx("wrap-total")}>
                    <h1 className={cx("total")}>
                        <span>4.221</span>
                    </h1>
                    <div className={cx("category")}>
                        <Monitor /> <span>Thiết bị</span>
                    </div>
                </div>
                <div className={cx("status")}>
                    <span className={cx("is-active")}>Đang hoạt động</span>
                    <span className={cx("inactive")}>Ngưng hoạt động</span>
                </div>
                <div className={cx("quantity")}>
                    <span>3.799</span>
                    <span>422</span>
                </div>
            </div>
            <DatePicker />
        </div>
    );
}

export default OverView;
