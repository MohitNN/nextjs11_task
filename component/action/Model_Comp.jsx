import React from 'react'
import { Button, Modal, Checkbox, Form, Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { storeUsers } from '../../redux/actions/EventAction';
import { v4 as uuidv4 } from 'uuid';
const Model_Comp = ({ show, setShow }) => {

    const dispatch=useDispatch();
    const getUser=JSON.parse(localStorage.getItem('add-users'));
    console.log(getUser)
    const onFinish = (values) => {
        dispatch(storeUsers({id:uuidv4(),firstname:values.firstname,lastname:values.lastname,email:values.email}));
        console.log('Success:', );
        setShow(false);
    };
    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };
   
    const handleCancel=()=>{
        setShow(false);
    }
    return (
        <>
            <Modal
                title="Add Users"
                open={show}
                // onOk={handleOk}
                footer={null}
                // confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
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
                    {/* <div style={{display:"flex"}}> */}
                    <Space wrap style={{ justifyContent: "end", width: "100%" }}>  <Form.Item
                        wrapperCol={{
                            offset: 0,
                        }}
                    >

                        <Button type="primary" danger onClick={()=>{handleCancel()}}>
                            cancle
                        </Button>
                    </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                            }}
                        >
                            <Button type="primary" htmlType="submit" >
                                Add
                            </Button>
                        </Form.Item></Space>

                    {/* </div> */}

                </Form>
            </Modal>
        </>
    )
}

export default Model_Comp