import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TableBox from '../../Components/TableBox';
import { mockTransactions } from '../../Helpers/UserReservedDummy';
import CustomHeader from '../../Components/CustomTitle';
import PieRechartComponent from '../../Components/Chart/Chart';

const Reservations = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    const [filteredData, setFilteredData] = useState([]);

    // Define the fetchData function to fetch book data from the backend API
    const fetchData = async () => {
        try {
            const data = mockTransactions;
            setFilteredData(data);

        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    



    const columns = [

        { field: 'txId', headerName: 'transaction Id', flex: 0.3 },
        { field: 'user', headerName: 'User', flex: 0.4 },
        {
            field: 'bookid',
            headerName: 'Bookd Id',
            flex: 0.3,
            cellClassName: 'name-column--cell',
        },

        {
            field: 'time',
            headerName: 'Time',
            flex: 0.3,
        },
       

    ];

    return (

        <div >
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div style={{ flex: '1' }} data-aos="fade-up">
                    <TableBox filteredData={filteredData} columns={columns} data-aos="fade-up" id={"txId"} height="45vh" />
                </div>

                <div style={{ flex: '1', padding: "25px 2px 0px 2px"}}>
                    <PieRechartComponent/>
                </div>
            </div>
        </div>
    );
};

export default Reservations;