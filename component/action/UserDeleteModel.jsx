import React from 'react'
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../../redux/actions/EventAction';
const UserDeleteModel = ({ open, setOpen, delitem, setDelItem }) => {
    const dispatch=useDispatch();
    const handleCancel = () => {
        setOpen(false)
    }
    const handleOk = () => {
        dispatch(deleteUsers(delitem,setDelItem))
        setOpen(false)
    }
    return (
        <>
            <Modal
                open={open}
                title="Delete User"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="" type="primary" onClick={handleCancel}>
                        Cancle
                    </Button>,
                    <Button key="submit" type="primary" danger  onClick={handleOk}>
                        Delete
                    </Button>,

                ]}
            >
                <h2>Are you Sure ?</h2>
                <p>Are you Sure You want to Remove this Record ?</p>

            </Modal>
        </>
    )
}

export default UserDeleteModel