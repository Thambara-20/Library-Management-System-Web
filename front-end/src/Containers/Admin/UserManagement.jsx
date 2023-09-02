import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Users from '../Admin/Users'

function UserManagement() {
  return (

    <div className="app" style={{ display: "flex", position: "relative" }}>
      <Sidebar />
      <main className="content" style={{
        height: "100%", width: "100%", fontFamily: 'Source Sans Pro'
      }}>
        <Users />
      </main>
    </div>

  )
}

export default UserManagement