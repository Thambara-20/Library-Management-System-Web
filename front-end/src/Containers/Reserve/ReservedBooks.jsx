import React, { useEffect, useState } from 'react';
import BookCardVertical from '../../Components/BookCardVertical'; 
import { reservedlist } from '../../services/reservationService';
import { cancelReservation } from '../../services/reservationService';

const ReservedBooks = () => {
  const [userReservedBooks, setUserReservedBooks] = useState([]);
  const [reservation_id, setReservation_id] = useState(null);

  async function fetchData() {
    try {
      const response = await reservedlist();
      setUserReservedBooks(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [reservation_id]);

  async function handleCancel(reservationId) {
    try {
      console.log(reservationId);
      await cancelReservation(reservationId);
      setUserReservedBooks((prevReservedBooks) =>
        prevReservedBooks.filter((reservation) => reservation.reservation_id !== reservationId)
      );
    } catch (error) {
      console.log(error);
    }
  }

  if (!userReservedBooks) return null;

  return (
    <div data-aos='fade-up'>
      <div>
        {userReservedBooks.map((reservation) => (
          <BookCardVertical
            key={reservation.reservation_id}
            book={reservation.book}
            showCancellationButton={true}
            setid={setReservation_id}
            Cancel={() => handleCancel(reservation.reservation_id)}
            id={reservation.reservation_id}
          />
        ))}
      </div>
    </div>
  );
};

export default ReservedBooks;

