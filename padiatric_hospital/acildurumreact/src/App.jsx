import { useState } from 'react'
import  './index.css'
import Yenidurumekle from './acildurumelementleri/yenidurumekle'
import Durumlar from './acildurumelementleri/durumlar'

function App() {

  return (
    <div className='container'>
      <Yenidurumekle/>
      <Durumlar/>
      
    </div>
  )
}

export default App
