import { Provider } from 'react-redux'
import Store from '../redux/Store'
import '../styles/globals.css'
import '../styles/login.css'
import '../styles/BackDrop.css'
import '../styles/users.css'
import Layout_Comp from '../component/layout/Layout_Comp'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const {pathname}=useRouter();
  return <Provider store={Store}>
    {pathname == "/login" ? <Component {...pageProps} /> : <Layout_Comp> <Component {...pageProps} /></Layout_Comp>
   }
    
  </Provider>
}

export default MyApp
