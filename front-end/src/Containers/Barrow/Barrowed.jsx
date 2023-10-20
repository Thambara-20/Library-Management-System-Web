import React, { useEffect, useState } from 'react';
import { getBarrowed } from '../../services/barrowingService';
import BookCardVertical from '../../Components/BookCardVertical'; 

const BarrowedBooks = () => {
  const [userBarrowed, setUserBarrowed] = useState([]);

  const fetchData = async ()=>{
    const data = await getBarrowed()
    setUserBarrowed(data);
    console.log(data)
  }

  useEffect( ()=>{
     fetchData();
  },[])


  return (
    <div data-aos='fade-up'>
        <div>
          {userBarrowed.map((barrowed) => (
            <BookCardVertical key={barrowed.barrow_id} book={barrowed.book} showReturn={false} id ={barrowed.barrow_id} item = {barrowed}/>
          ))}
        </div>
        {userBarrowed.length === 0 && <div style={{color:'white', zIndex:10, height:100 }}>No Barrowed Books</div>}
    </div>
  );
};

export default BarrowedBooks;
