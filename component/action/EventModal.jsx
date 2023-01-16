import React from 'react'
import { Button, Modal, Checkbox, Form, Input, Space, DatePicker } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import moment from 'moment';

const EventModal = ({ show, setShow,events }) => {

    console.log(events,'-------events----')
    
    const onFinish = (values) => {
        
        // console.log(values.start_date.$d)
        console.log(moment(values.start_date.$d))
            // setLoading(true)
            // dispatch(userLogin(values,setLoading,router));
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
    const handleOk = () => {
        alert()
    }
    
    return (
        <>
            <Modal
                title="Add Event"
                open={show}
                onOk={handleOk}
                footer={null}
                // confirmLoading={confirmLoading}
                onCancel={() => setShow(false)}
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
                        label="Title"
                        name="title"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'enter event title',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Start date"
                        name="start_date"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        rules={[
                            {
                                type: 'object',
                                required: true,
                                message: 'enter starting date of an event!',
                            },
                        ]}
                    >
                        {/* <Input /> */}
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Ending date"
                        name="ending_date"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        rules={[
                            {
                                type: 'object',
                                required: true,
                                message: 'enter ending date of an event!',
                            },
                        ]}
                    >
                        {/* <Input /> */}
                        <DatePicker />
                    </Form.Item>
                    {/* <div style={{display:"flex"}}> */}
                    <Space>  <Form.Item
                        wrapperCol={{
                            offset: 0,
                        }}
                    >

                        <Button type="danger" htmlType="button" danger onClick={()=>setShow(false)}>
                            Cancle
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

export default EventModal