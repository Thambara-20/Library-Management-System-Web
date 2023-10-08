import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Users from './Users'
import Reservations from './Reservations'
import ReservedBooks from './ReservedBooks'


function ReservedBooksPage() {
  return (

    <div className="app" style={{display: "flex",position: "relative"}}>
      <Sidebar />
      <main className="content" style={{
        height: "100%", width: "100%", fontFamily: 'Source Sans Pro'
      }}>
        <ReservedBooks />
        {/* <Reservations/> */}
      </main>
    </div>

  )
}

export default ReservedBooksPage