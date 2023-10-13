import React from 'react'
import loading from '../../src/assets/loading.gif'

const LoadingIcon = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={loading} alt="Book Cover" style={{ maxWidth: '10%', maxHeight: '10%' }} />
        </div>
    )
}

export default LoadingIcon