import Layout from './components/Layout/Layout'
import ProductsDispatch from './dispatch/ProductsDispatch'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MensPage from './pages/MensPage'
import WomensPage from './pages/WomensPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <ProductsDispatch />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index = {true} element={<HomePage />} />
            <Route path='men' element={<MensPage />} />
            <Route path='women' element={<WomensPage/>} />
            <Route path='about' element={<AboutPage/>} />
            <Route path='contact' element={<ContactPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
