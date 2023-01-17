import React, { useEffect, useState } from 'react'
import { Button, Form, Input} from 'antd';
import { useRouter } from 'next/router';
import {  getUserLogin, userLogin } from '../redux/actions/EventAction';
import { useDispatch ,useSelector} from 'react-redux';
import BackDrop from '../component/action/BackDrop';
import { LOGIN, USERS } from '../services/routes';
const Login = () => {
    const router = useRouter();
    const [loading,setLoading]=useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUserLogin());
       
    },[dispatch])
    const user=useSelector((s)=>s.EventReducer.user);
    useEffect(()=>{
         if(user)
         {
            router.replace(USERS)
         }
         else
         {
            router.replace(LOGIN)
         }
    },[user])
    const onFinish = (values) => {
        setLoading(true)
        dispatch(userLogin(values,setLoading,router));
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

export default Login