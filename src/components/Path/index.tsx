import { useEffect, useState } from "react";
import { pathSelectors } from "@/redux/selectors";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Path.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/redux/store";
import pathSlice from "@/redux/slices/pathSlice";
import { IPath } from "@/interfaces";
import myPath from "@/configs/myPath";

const cx = classNames.bind(styles);

function Path() {
    const { path } = useSelector(pathSelectors);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            pathSlice.actions.setPath(
                myPath.find(
                    (path) => path.link === window.location.pathname && path
                ) as IPath
            )
        );
    }, []);
    return (
        <div className={cx("wrapper")}>
            {path.map((path, index) => {
                return (
                    <Link to={path.link} key={index} className={cx("btn-path")}>
                        {path.name}
                    </Link>
                );
            })}
        </div>
    );
}

export default Path;
