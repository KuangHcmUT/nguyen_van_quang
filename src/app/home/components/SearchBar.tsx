import React, { useState } from "react";
import { Form, Select, Button } from "antd";

import provinces from "./tinh_tp.json";
import districts from "./quan_huyen.json";

const { Option } = Select;

interface FilterFormProps {
    onFilter: (values: FilterValues) => void;
}

interface FilterValues {
    province: string;
    district: string;
    priceRange: string;
    area: string;
}

const SearchBar: React.FC<FilterFormProps> = ({ onFilter }) => {
    const [province, setProvince] = useState<string>("0");
    const [district, setDistrict] = useState<string>("0");
    const [priceRange, setPriceRange] = useState<string>("0");
    const [area, setArea] = useState<string>("0");

    const [form] = Form.useForm();

    const handleFinish = () => {
        onFilter({
            province,
            district,
            priceRange,
            area,
        });
    };

    const onProvinceChange = (value: string) => {
        setProvince(value);
        setDistrict("0");
        form.setFieldsValue({ district: "0" });
    };

    return (
        <div className="bg bg-orange-300 p-2 w-3/4 m-auto">
            <Form
                layout="inline"
                onFinish={handleFinish}
                form={form}
                style={{ margin: "2px" }}
                initialValues={{
                    province: "0",
                    district: "0",
                    priceRange: "0",
                    area: "0",
                }}
            >
                <Form.Item name="province">
                    <div className="flex flex-col gap-2">
                        <strong>Tỉnh thành</strong>
                        <Select
                            style={{ width: 200 }}
                            value={province}
                            onChange={onProvinceChange}
                        >
                            <Option value="0">--Tỉnh thành--</Option>
                            {Object.keys(provinces).map((key) => {
                                const province = provinces[key];
                                return (
                                    <Option key={key} value={province.code}>
                                        {province.name_with_type}
                                    </Option>
                                );
                            })}
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item name="district">
                    <div className="flex flex-col gap-2">
                        <strong>Quận huyện</strong>
                        <Select
                            style={{ width: 200 }}
                            value={district}
                            onChange={setDistrict}
                        >
                            <Option value="0">--Quận huyện--</Option>
                            {Object.keys(districts).map((key) => {
                                const district = districts[key];
                                return (
                                    (district.parent_code === province ||
                                        province === "0") && (
                                        <Option key={key} value={district.code}>
                                            {district.name_with_type}
                                        </Option>
                                    )
                                );
                            })}
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item label="" name="priceRange">
                    <div className="flex flex-col gap-2">
                        <strong>Khoảng giá</strong>
                        <Select
                            style={{ width: 150 }}
                            value={priceRange}
                            onChange={setPriceRange}
                        >
                            <Option value="0">Chọn mức giá</Option>
                            <Option value="1">Dưới 1 triệu</Option>
                            <Option value="2">1 triệu - 2 triệu</Option>
                            <Option value="3">2 triệu - 3 triệu</Option>
                            <Option value="4">3 triệu - 5 triệu</Option>
                            <Option value="5">5 triệu - 7 triệu</Option>
                            <Option value="6">7 triệu - 10 triệu</Option>
                            <Option value="8">10 triệu - 20 triệu</Option>
                            <Option value="8">Trên 20 triệu</Option>
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item label="" name="area">
                    <div className="flex flex-col gap-2">
                        <strong>Diện tích</strong>
                        <Select
                            style={{ width: 150 }}
                            value={area}
                            onChange={setArea}
                        >
                            <Option value="0">Chọn diện tích</Option>
                            <Option value="1">Dưới 20m2</Option>
                            <Option value="2">20m2 - 30m2</Option>
                            <Option value="3">30m2 - 50m2</Option>
                            <Option value="4">50m2 - 60m2</Option>
                            <Option value="5">60m2 - 70m2</Option>
                            <Option value="6">70m2 - 80m2</Option>
                            <Option value="7">80m2 - 100m2</Option>
                            <Option value="8">Trên 100m2</Option>
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className="flex flex-col gap-2">
                        <strong className="t text-orange-300">Lọc</strong>
                        <Button type="primary" htmlType="submit" className="">
                            Lọc tin
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SearchBar;
