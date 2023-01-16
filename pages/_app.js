import { Provider } from 'react-redux'
import Store from '../redux/Store'
import '../styles/globals.css'
import '../styles/login.css'
import '../styles/BackDrop.css'
function MyApp({ Component, pageProps }) {
  return <Provider store={Store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
