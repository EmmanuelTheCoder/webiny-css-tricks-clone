import '../styles/App.css';
import {ProductProvider} from './context'

function MyApp({ Component, pageProps }) {
  return(
    <ProductProvider>

      <Component {...pageProps} />
    </ProductProvider>

  )
}

export default MyApp 
