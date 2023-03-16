import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from "redux/store"
import NavBar from '../components/navbar/navbar'
import '../styles/globals.css'

function MyApp({ Component }: AppProps) {
  return (
    <Provider store={store}>
      <NavBar/>
      <Component/>
    </Provider>
  )
}

export default MyApp
