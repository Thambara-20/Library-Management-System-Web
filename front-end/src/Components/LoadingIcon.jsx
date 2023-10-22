import React from 'react'
import loading from '../../src/assets/loading.gif'

const LoadingIcon = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={loading} alt="Book Cover" style={{ maxWidth: '5%', maxHeight: '5%' }} />
        </div>
    )
}

export default LoadingIcon