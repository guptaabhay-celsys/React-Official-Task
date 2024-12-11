import Layout from './components/Layout/Layout'
import ProductsDispatch from './dispatch/ProductsDispatch'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MensPage from './pages/MensPage'

function App() {

  return (
    <>
      <ProductsDispatch />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index={true} element={<HomePage />} />
            <Route path='men' element={<MensPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
