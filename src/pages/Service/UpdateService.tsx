import { Input, Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Service.module.scss";
import { useAppDispatch } from "@/redux/store";
import pathSlice from "@/redux/slices/pathSlice";
import { useSelector } from "react-redux";
import { serviceSelectors } from "@/redux/selectors";
import { useState } from "react";
import MessageNotify from "@/components/MessageNotify";
import { updateService } from "@/redux/slices/serviceSlice";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
const cx = classNames.bind(styles);

function UpdateService() {
    const { loading, detailService } = useSelector(serviceSelectors);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [state, setState] = useState(detailService);
    const {
        serviceCode,
        serviceName,
        description,
        autoIncrement,
        prefix,
        surfix,
        reset,
    } = state;

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        payload: string
    ) => {
        const copyState: any = { ...state };
        copyState[payload] = e.target.value;
        setState(copyState);
    };

    const handleChecked = (
        e: CheckboxChangeEvent,
        key: "autoIncrement" | "prefix" | "surfix" | "reset"
    ) => {
        const copyState: any = { ...state };
        if (key === "reset") copyState[key] = e.target.checked;
        else copyState[key].checked = e.target.checked;
        setState(copyState);
    };

    const handleChangeInputRule = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: "autoIncrement" | "prefix" | "surfix"
    ) => {
        const copyState: any = { ...state };
        copyState[key].value = e.target.value;
        setState(copyState);
    };
    const handleChangeInputAutoIncrement = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: "from" | "to"
    ) => {
        const copyState: any = { ...state.autoIncrement };
        copyState[key] = e.target.value;
        setState({
            ...state,
            autoIncrement: copyState,
        });
    };

    const handleBackPage = () => {
        dispatch(pathSlice.actions.back());
        navigate("/services");
    };

    const handleUpdate = async () => {
        if (!serviceCode || !serviceName) {
            MessageNotify(
                "error",
                <p>
                    C??c tr?????ng c?? d???u <span className="required">*</span> kh??ng
                    ???????c b??? tr???ng!
                </p>,
                "topRight"
            );
            return;
        }
        const res = await dispatch(
            updateService({ id: detailService._id, payload: state })
        );
        if (res.payload) {
            MessageNotify("success", "???? c???p nh???t d???ch v???!", "topRight");
            handleBackPage();
        } else MessageNotify("error", "???? c?? l???i x???y ra!", "topRight");
    };

    return (
        <div className={cx("wrapper", "add-service-wrap")}>
            <h1 className={cx("heading")}>Qu???n l?? d???ch v???</h1>
            <div className={cx("wrap-content")}>
                <h2 className={cx("sub-heading")}>Th??ng tin d???ch v???</h2>
                <div className={cx("wrap-text-box")}>
                    <div className={cx("text-box-item", "text-box-required")}>
                        <div>
                            <span className={cx("title")}>
                                M?? d???ch v???:
                                <span className={cx("required")}>*</span>
                            </span>
                            <Input
                                readOnly
                                placeholder="Nh???p v??o m?? d???ch v???"
                                spellCheck={false}
                                value={serviceCode}
                            />
                        </div>
                        <div>
                            <span className={cx("title")}>
                                T??n d???ch v???:
                                <span className={cx("required")}>*</span>
                            </span>
                            <Input
                                placeholder="Nh???p v??o t??n d???ch v???"
                                spellCheck={false}
                                value={serviceName}
                                onChange={(e) =>
                                    handleOnChange(e, "serviceName")
                                }
                            />
                        </div>
                    </div>
                    <div className={cx("text-box-item")}>
                        <span className={cx("title")}>M?? t???:</span>
                        <Input.TextArea
                            placeholder="M?? t??? d???ch v???"
                            className={cx("desc-box")}
                            spellCheck={false}
                            value={description}
                            onChange={(e) => handleOnChange(e, "description")}
                        />
                    </div>
                </div>
                <div className={cx("setting-role")}>
                    <h2 className={cx("sub-heading")}>Quy t???c c???p s???</h2>
                    <div className={cx("auto-increase", "wrap-check-box")}>
                        <Checkbox
                            className={cx("check-box")}
                            checked={autoIncrement?.checked}
                            onChange={(e) => handleChecked(e, "autoIncrement")}
                        >
                            T??ng t??? ?????ng t???:
                        </Checkbox>
                        <Input
                            type="number"
                            className={cx("number-box")}
                            value={autoIncrement?.from}
                            onChange={(e) =>
                                handleChangeInputAutoIncrement(e, "from")
                            }
                        />
                        <span>?????n</span>
                        <Input
                            type="number"
                            className={cx("number-box")}
                            value={autoIncrement?.to}
                            onChange={(e) =>
                                handleChangeInputAutoIncrement(e, "to")
                            }
                        />
                    </div>
                    <div className={cx("wrap-check-box")}>
                        <Checkbox
                            className={cx("check-box")}
                            checked={prefix?.checked}
                            onChange={(e) => handleChecked(e, "prefix")}
                        >
                            Prefix:
                        </Checkbox>
                        <Input
                            type="number"
                            className={cx("number-box")}
                            value={prefix?.value}
                            onChange={(e) => handleChangeInputRule(e, "prefix")}
                        />
                    </div>
                    <div className={cx("wrap-check-box")}>
                        <Checkbox
                            className={cx("check-box")}
                            checked={surfix?.checked}
                            onChange={(e) => handleChecked(e, "surfix")}
                        >
                            Surfix:
                        </Checkbox>
                        <Input
                            type="number"
                            className={cx("number-box")}
                            value={surfix?.value}
                            onChange={(e) => handleChangeInputRule(e, "surfix")}
                        />
                    </div>
                    <div className={cx("wrap-check-box")}>
                        <Checkbox
                            className={cx("check-box")}
                            checked={reset}
                            onChange={(e) => handleChecked(e, "reset")}
                        >
                            Reset m???i ng??y
                        </Checkbox>
                    </div>
                </div>
                <div className={cx("note")}>
                    <span className={cx("required")}>*</span>
                    <span className={cx("text")}>
                        L?? tr?????ng th??ng tin b???t bu???c
                    </span>
                </div>
            </div>
            <div className={cx("wrap-button")}>
                <button
                    onClick={handleBackPage}
                    className={cx("btn-cancel", "btn btn-outline")}
                >
                    H???y b???
                </button>
                <Button
                    onClick={handleUpdate}
                    className={cx("btn-add", "btn btn-primary")}
                    loading={loading}
                >
                    C???p nh???t
                </Button>
            </div>
        </div>
    );
}

export default UpdateService;
