import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Books from '../Admin/Books'

function BookManagement() {
  return (
 
    <div className="app" style={{display: "flex",position: "relative"}}>
      <Sidebar />
      <main className="content" style={{height: "100%",width: "100%", fontFamily: 'Source Sans Pro'
      }}><Books/>
      </main>
    </div>
    
  )
}

export default BookManagement