import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer text="Esta es la tienda oficial para activistas de Anonymous for the Voiceless, acá vas a ver todos nuestros productos disponibles."/>
    </>
  )
}

export default App
