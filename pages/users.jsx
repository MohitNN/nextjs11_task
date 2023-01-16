import React, { useEffect } from 'react'
import {useRouter} from 'next/router';
import HeaderComp from '../component/layout/HeaderComp';
import FooterComp from '../component/layout/FooterComp';
import Sidebar from '../component/layout/Sidebar';
import { Breadcrumb, Layout, Menu, theme,Button } from 'antd';
import { useState } from "react";
import Model_Comp from '../component/action/Model_Comp';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/EventAction';
import { Space, Table, Tag } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const users = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch=useDispatch();
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const [show,setShow]=useState(false);
    const handleAdd=()=>{
         
         setShow(true);

    }
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'First Name',
          dataIndex: 'firstname',
          key: 'firstname',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title:"Action",
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary">Edit</Button>
                    <Button type="primary" danger>Delete</Button>
                </Space>
              ),
        }
      ];
    const users=useSelector((s)=>s.EventReducer.users);
    console.log(users)
  return (
    <>
         {show?<Model_Comp show={show} setShow={setShow}/>:null}
            <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <HeaderComp />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Users</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Button type="primary" onClick={()=>handleAdd()}>Add</Button>

                        <Table columns={columns} dataSource={users} />
                       
                    </div>
                </Content>
                <FooterComp />
            </Layout>
        </Layout>
    </>
  )
}

export default users
