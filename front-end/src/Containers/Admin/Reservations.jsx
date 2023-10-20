import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TableBox from '../../Components/TableBox';
import { mockTransactions } from '../../Helpers/UserReservedDummy';
import PieRechartComponent from '../../Components/Chart/Chart';
import { fetchReservationData } from '../../services/reservationService';


const Reservations = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    const [data, setData] = useState([]);

    const flattenBookObjects = (reservationData) => {
		const flattenedData = reservationData.map((reservation) => ({
			...reservation,
			...reservation.book,
			...reservation.user,
		}));
		return flattenedData;
	};
    const fetchData = async () => {
        try {
            const reservationData = await fetchReservationData();
            const flattenedData = flattenBookObjects(reservationData);
            setData(flattenedData);
        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    }
    // Define the fetchData function to fetch book data from the backend API
 

    useEffect(() => {
        fetchData();
    }, []);
    



    const columns = [

        { field: 'reservation_id', headerName: 'Reservation Id', flex: 0.3 },
        { field: 'bookid', headerName: 'Book Id', flex: 0.4 },
        {
			field: 'name',
			headerName: 'Name',
			flex: 0.4,
			cellClassName: 'name-column--cell',
		},


        {
            field: 'createdAt',
            headerName: 'Time',
            flex: 0.5,
        },
       

    ];

    return (

        <div >
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div style={{ flex: '1' }} data-aos="fade-up">
                    <TableBox filteredData={data} columns={columns} data-aos="fade-up" id="reservation_id"  height="45vh" />
                </div>

                <div style={{ flex: '1', padding: "25px 2px 0px 2px"}}>
                    <PieRechartComponent/>
                </div>
            </div>
        </div>
    );
};

export default Reservations;