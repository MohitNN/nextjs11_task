// import React, { useState } from 'react';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import Sidebar from './Sidebar';
// import HeaderComp from './HeaderComp';
// import FooterComp from './FooterComp';
// import {useRouter} from 'next/router';
// import { CALENDAR } from '../../services/routes';
// import Calender from '../../pages/calendar/Calender';
// const { Header, Content, Footer, Sider } = Layout;


// const Layout_Comp = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   // const router = useRouter();
//   // console.log(CALENDAR)
//   // console.log(router.pathname)
//   return (
//     <>
//       <Layout
//         style={{
//           minHeight: '100vh',
//         }}
//       >
    
//         <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
//         <Layout className="site-layout">
//           <HeaderComp/>
//           <Content
//             style={{
//               margin: '0 16px',
//             }}
//           >
//             <Breadcrumb
//               style={{
//                 margin: '16px 0',
//               }}
//             >
//               <Breadcrumb.Item>Users</Breadcrumb.Item>
//               <Breadcrumb.Item>All Users</Breadcrumb.Item>
//             </Breadcrumb>
//             <div
//               style={{
//                 padding: 24,
//                 minHeight: 360,
//                 background: colorBgContainer,
//               }}
//             >
//               {/* {router.pathname == CALENDAR ? <Calender/> :'this is cat'} */}
//             </div>
//           </Content>
//           <FooterComp/>
//         </Layout>
//       </Layout>
//     </>
//   )
// }

// export default Layout_Comp