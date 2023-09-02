import React from 'react'
import Sidebar from '../../Components/Sidebar';
import Topbar from '../../Components/Topbar';
import Dashboard from './AdminDashboard';

const AdminMainPage = () => {
  return (
    <div> 
      <div className="app" style={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <main className="content" style={{
          height: "100%", width: "100%", fontFamily: 'Source Sans Pro'
        }}>
          <Topbar />
          < Dashboard />
        </main>
      </div>
    </div>
  )
}

export default AdminMainPage