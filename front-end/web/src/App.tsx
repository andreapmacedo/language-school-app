import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes'
import Layout from './components/Layout'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

function App() {
  return (
    // <ThemeProvider theme={light}>
      <ThemeProvider theme={dark}>
      <GlobalStyles />
      {/* <AppRoutes /> */}
      <Layout />
    </ThemeProvider>
  )
}

export default App
