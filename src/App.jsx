import './App.css'
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/pages/ItemListContainer'
import { Route, Routes } from 'react-router'
import NotFound from './components/pages/NotFound'
import ItemDetailContainer from './components/pages/ItemDetailContainer'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:category" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
