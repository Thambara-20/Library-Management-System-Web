import React from 'react'

const ReadPage = ({pageData, bookTitle}) => {
  return (
    <div className="read-pages-content" >
    <div style={{display:'flex',flexDirection:'column',width:'90%',height:'90%',backgroundColor:'white',borderRadius:'5px',color:'black',opacity:'0.8',justifyContent:'center',alignItems:'center'}}>
      
    <p style={{fontWeight:'bold', color:'black'}}>{bookTitle}</p>
    <p>{[pageData]}</p>
    <p></p>
    </div>
  </div>

  )
}

export default ReadPage