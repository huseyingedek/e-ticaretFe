import React from 'react';
import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

const INITIAL_FORMDATA = {
    email: "",
    password: "",
};

interface LoginFormProps {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isModalOpen, handleOk, handleCancel }) => {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState<any>(INITIAL_FORMDATA);

    const onSubmit = (submitData: any) => {
        //login(submitData);
    };

    return (
        <Modal visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <Form
                name="basic"
                form={form}
                layout="vertical"
                onFinish={onSubmit}
                fields={Object.entries(formData).map(([name, value]) => ({
                    name,
                    value,
                }))}
                autoComplete="off"
                scrollToFirstError
                onValuesChange={(changedValues, allValues) => {
                    setFormData({ ...formData, ...allValues });
                }}
                onFinishFailed={() => console.log("failed")}

            >
                <Form.Item
                    name="email"
                    label="E-Posta"
                    rules={[{ required: true, message: "E-Posta Adresinizi Girin" }]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Şifre"
                    rules={[{ required: true, message: "Şifrenizi Giriniz" }]}
                >
                    <Input.Password size="large" />
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    variant="outlined"
                    size="large"
                    className="flex w-full text-center items-center justify-center mt-8"
                >
                    Giriş Yap
                </Button>
            </Form>
        </Modal>
    )
}

export default LoginForm;