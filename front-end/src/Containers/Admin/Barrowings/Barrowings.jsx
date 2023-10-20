import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Topbar from '../../../Components/Topbar';
import TableBox from '../../../Components/TableBox';
import { Button } from '@mui/material';
import LoadingIcon from '../../../Components/LoadingIcon';
import {returns,getBarrows} from '../../../services/barrowingService'
const Barrowings = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // const flattenBookObjects = (reservationData) => {
	// 	const flattenedData = reservationData.map((reservation) => ({
	// 		...reservation,
		
	// 	}));
	// 	return flattenedData;
	// };
    const fetchData = async () => {
        try {
            const barrowData = await getBarrows();
            setData(barrowData);
            filterData(barrowData, searchQuery);

        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    }

    const filterData = (dataToFilter, query) => {
        if (query) {
            const newFilteredData = dataToFilter.filter((reservation) => {
                const idMatch = reservation.reservation_id.toString().toLowerCase().includes(query.toLowerCase());
                const nameMatch = reservation.name.toLowerCase().includes(query.toLowerCase());
                return idMatch || nameMatch;
            });
            setFilteredData(newFilteredData);
        } else {
            setFilteredData(dataToFilter);
        }
    }

    const handleReturning = async (barrow_id) => {
        const isConfirmed = window.confirm('Are you sure you want to borrow this book?');
         if (isConfirmed) {
            try {
                await returns(barrow_id);
               filterData(data.filter((barrowing) => barrowing.barrow_id !== barrow_id), searchQuery);
             } catch (e) {
                 console.error(e);
             }
     }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Run filterData when the component mounts and whenever searchQuery changes
        filterData(data, searchQuery);
    }, [searchQuery]);

	const columns = [
		{ field: 'barrow_id', headerName: 'ID', flex: 0.4 },
		{ field: 'bookid', headerName: 'Book ID',flex: 0.4 },
		{
			field: 'name',
			headerName: 'Name',
			flex: 0.4,
			cellClassName: 'name-column--cell',
		},

		{
			field: 'title',
			headerName: 'Book Title',
			flex: 0.7,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 0.7,
		},
		{
			field: 'Return',
			renderCell: (cellValues) => (
				<Button
					variant="contained"
					style={{ backgroundColor: 'rgb(100, 100, 100)', color: 'white' }}
					onClick={() => handleReturning(cellValues.row.barrow_id)}
				>
					Return now
				</Button>
			),flex: 0.7,
		},
		
	];

	if (!filteredData) {
		return <LoadingIcon/>;
	}
	return (
		<div style={{ width: '100%', maxWidth: "1280px", overflowY: 'auto' }}>
			<Topbar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={filterData}
			/>
			<TableBox filteredData={filteredData} topic="Book Lending Record" columns={columns} id="barrow_id" />
		</div>
	);
};

export default Barrowings;