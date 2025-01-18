import React from 'react'
import  '../index.css'
import Durumkarti from './durumkarti'
function Durumlar() {
 
 const durumlar = JSON.parse(localStorage.getItem("durumlar"));
  console.log(durumlar);
  return (
    <div className='durumlar'>
      
      {durumlar.map((durum,index)=>{
           return <Durumkarti key={index} durumverisi={durum} />
          })}
    </div>
  )
}

export default Durumlar
