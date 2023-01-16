import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Text ,Spin} from 'antd';
import { getLoggedInUser, storeLoggedInUser } from '../services/StorageService';
import { useRouter } from 'next/router';
import { getUser, userLogin } from '../redux/actions/EventAction';
import { useDispatch ,useSelector} from 'react-redux';
import BackDrop from '../component/action/BackDrop';
const login = () => {
    const router = useRouter();
    const [loading,setLoading]=useState(false);
    // const user = getLoggedInUser();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUser());
       
    },[dispatch])
    const user=useSelector((s)=>s.EventReducer.user);
    useEffect(()=>{
         if(user)
         {
            router.push("/");
         }
    },[user])
    const onFinish = (values) => {
    console.log(values)
        setLoading(true)
        dispatch(userLogin(values,setLoading,router));
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {loading?<BackDrop/>:null}
            <div className='container' style={{ maxWidth: "1440px" }}>
                <h1 className='login-text'>Login</h1>
                <div className='login-form-main'>

                    <Form
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        initialValues={{
                            remember: true,
                        }}

                    >
                        <Form.Item
                            label="Email"
                            name="email"
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

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 11,
                            }}
                        >

                            <Button type="primary" htmlType="submit" >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>


        </>
    )
}

export default login