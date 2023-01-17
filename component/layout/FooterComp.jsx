import {Layout} from 'antd';
const {Footer} = Layout;
import React from 'react'

const FooterComp = () => {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </>
    )
}

export default FooterComp