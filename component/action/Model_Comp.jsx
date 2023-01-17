import React, { useEffect } from 'react'
import { Button, Modal, Checkbox, Form, Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { storeUsers, updateUsers } from '../../redux/actions/EventAction';
import { v4 as uuidv4 } from 'uuid';
const Model_Comp = ({ show, setShow, edititem, action }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const getUser = JSON.parse(localStorage.getItem('add-users'));
    console.log(getUser)
    const onFinish = (values) => {
        if (action == "add") {
            dispatch(storeUsers({ id: uuidv4(), firstname: values.firstname, lastname: values.lastname, email: values.email }));
        }
        else {
            dispatch(updateUsers({ id: edititem.id, firstname: values.firstname, lastname: values.lastname, email: values.email }));
        }
        form.resetFields();
        setShow(false);
    };
    useEffect(() => {
        if (edititem) {
            form.setFieldsValue({
                firstname: edititem.firstname,
                lastname: edititem.lastname,
                email: edititem.email,
            });
        }
    }, [edititem])
    const handleCancel = () => {
        setShow(false);
    }
    return (
        <>
            <Modal
                title={action == "add" ? "Add Users" : "Upate Users"}
                open={show}
                footer={null}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="First Name"
                        name="firstname"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastname"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        rules={[
                            {
                                type: "email",
                                message: "Please provide a valid email!"
                            },
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                 
                    <Space wrap style={{ justifyContent: "end", width: "100%" }}>
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                            }}
                        >

                            <Button type="primary" danger onClick={() => { handleCancel() }}>
                                cancle
                            </Button>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                            }}
                        >
                            {
                                action == "add" ? <Button type="primary" htmlType="submit" >
                                    Add
                                </Button> : <Button type="primary" htmlType="submit" >
                                    Update
                                </Button>
                            }

                        </Form.Item>
                    </Space>

                  

                </Form>
            </Modal>
        </>
    )
}

export default Model_Comp