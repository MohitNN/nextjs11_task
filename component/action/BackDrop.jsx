import React from 'react'
import { Spin } from 'antd';
const BackDrop = () => {
    return (
        <>
            <div className='loader-center'>
            <Spin  size="large">
                <div className='back-drop'></div>
            </Spin>
            </div>
           

        </>
    )
}

export default BackDrop