import React from 'react'
import Sidebar from '../../../Components/Sidebar'
import PendingApprovals from './PendingApprovals'

function PendingApprovalsPage() {
  return (

    <div className="app" style={{display: "flex",position: "relative"}}>
      <Sidebar />
      <main className="content" style={{
        height: "100%", width: "100%", fontFamily: 'Source Sans Pro'
      }}>
        <PendingApprovals />
      </main>
    </div>

  )
}

export default PendingApprovalsPage