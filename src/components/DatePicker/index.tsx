import classNames from "classnames/bind";
import type { Moment } from "moment";
import { Calendar, Col, Radio, Row, Select } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import styles from "./DatePicker.module.scss";
const cx = classNames.bind(styles);

const DatePicker: React.FC = () => {
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format("YYYY-MM-DD"), mode);
    };

    return (
        <div className={cx("wrapper")}>
            <Calendar
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];

                    const current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                        current.month(i);
                        months.push(localeData.monthsShort(current));
                    }

                    for (let i = start; i < end; i++) {
                        monthOptions.push(
                            <Select.Option
                                key={i}
                                value={i}
                                className="month-item"
                            >
                                {months[i]}
                            </Select.Option>
                        );
                    }

                    const year = value.year();
                    const month = value.month();
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                        options.push(
                            <Select.Option
                                key={i}
                                value={i}
                                className="year-item"
                            >
                                {i}
                            </Select.Option>
                        );
                    }
                    return (
                        <div style={{ padding: 8 }}>
                            <Row gutter={8}>
                                <Col>
                                    <Radio.Group
                                        size="small"
                                        onChange={(e) =>
                                            onTypeChange(e.target.value)
                                        }
                                        value={type}
                                    >
                                        <Radio.Button value="month">
                                            Month
                                        </Radio.Button>
                                        <Radio.Button value="year">
                                            Year
                                        </Radio.Button>
                                    </Radio.Group>
                                </Col>
                                <Col>
                                    <Select
                                        size="small"
                                        dropdownMatchSelectWidth={false}
                                        className="my-year-select"
                                        value={year}
                                        onChange={(newYear) => {
                                            const now = value
                                                .clone()
                                                .year(newYear);
                                            onChange(now);
                                        }}
                                    >
                                        {options}
                                    </Select>
                                </Col>
                                <Col>
                                    <Select
                                        size="small"
                                        dropdownMatchSelectWidth={false}
                                        value={month}
                                        onChange={(newMonth) => {
                                            const now = value
                                                .clone()
                                                .month(newMonth);
                                            onChange(now);
                                        }}
                                    >
                                        {monthOptions}
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
                onPanelChange={onPanelChange}
            />
        </div>
    );
};

export default DatePicker;
