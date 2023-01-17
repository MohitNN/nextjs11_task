import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router';
import HeaderComp from '../component/layout/HeaderComp';
import FooterComp from '../component/layout/FooterComp';
import Sidebar from '../component/layout/Sidebar';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { useState } from "react";
import Model_Comp from '../component/action/Model_Comp';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin, getUsers } from '../redux/actions/EventAction';
import { Space, Table, Tag } from 'antd';
import UserDeleteModel from '../component/action/UserDeleteModel';
import { LOGIN, USERS } from '../services/routes';
const { Header, Content, Footer, Sider } = Layout;
const users = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [delitem, setDelItem] = useState();
    const [edititem, setEditItem] = useState();
    const [action, setAction] = useState();
    const router=useRouter();
    const handleAdd = () => {

        setShow(true);
        setAction("add");

    }
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getUserLogin())
    }, [dispatch])

    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'key',
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
            title: "Action",
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => { handleEdit(record) }}>Edit</Button>
                    <Button type="primary" danger onClick={() => { handleDelete(record) }}>Delete</Button>
                </Space>
            ),
        }
    ];
    const users = useSelector((s) => s.EventReducer.users);
    const list = users && users.map((item,index)=>{
        return {...item,key:index+1}
    })
    const login_user = useSelector((s) => s.EventReducer.user);
    useEffect(()=>{
         if(login_user){
            router.push(USERS)
         }
         else
         {
            router.push(LOGIN)
         }
    },[login_user])
    const handleDelete = (item) => {
        setOpen(true);
        setDelItem(item);
    }
    const handleEdit = (item) => {
        setShow(true);
        setAction("edit")
        setEditItem(item);
    }
    return (
        <>
            {show ? <Model_Comp show={show} setShow={setShow} edititem={edititem} setEditItem={setEditItem} action={action} setAction={setAction} /> : null}
            {open ? <UserDeleteModel open={open} setOpen={setOpen} delitem={delitem} setDelItem={setDelItem} /> : null}

            <Button type="primary" onClick={() => handleAdd()} className="addbtn">Add</Button>

            <Table columns={columns} dataSource={list} />


        </>
    )
}

export default users
