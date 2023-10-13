import React from 'react'
import Barrowings from './Barrowings'
import Sidebar from '../../../Components/Sidebar'


function BarrowingsPage() {
  return (

    <div className="app" style={{display: "flex",position: "relative"}}>
      <Sidebar />
      <main className="content" style={{
        height: "100%", width: "100%", fontFamily: 'Source Sans Pro'
      }}>
        <Barrowings />
        {/* <Reservations/> */}
      </main>
    </div>

  )
}

export default BarrowingsPage