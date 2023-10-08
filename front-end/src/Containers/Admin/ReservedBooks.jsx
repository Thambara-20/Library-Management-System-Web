import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Topbar from '../../Components/Topbar';
import TableBox from '../../Components/TableBox';
import { fetchReservationData } from '../../services/reservationService';

const ReservedBooks = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const [searchQuery, setSearchQuery] = useState('');
	const [data, setData] = useState();
	const [filteredData, setFilteredData] = useState();

	const flattenBookObjects = (reservationData) => {
		// Use map to transform the reservationData and flatten the book objects
		const flattenedData = reservationData.map((reservation) => ({
			...reservation,
			...reservation.book,
		}));
		return flattenedData;
	};
	const fetchData = async () => {
		try {
			const reservationData = await fetchReservationData();

			const flattenedData = flattenBookObjects(reservationData);
			setData(flattenedData);
			setFilteredData(flattenedData);
			console.log(flattenedData);

		} catch (error) {
			console.error('Error fetching book data:', error);
		}
	}


	const filterData = () => {
		// Clear previous search results by resetting filteredData to initial data
		let newFilteredData = data;
		if (searchQuery) {
			newFilteredData = data.filter((reservation) => {
				const idMatch = reservation.reservation_id.toString().toLowerCase().includes(searchQuery.toLowerCase());
				const nameMatch = reservation.name.toLowerCase().includes(searchQuery.toLowerCase());

				return idMatch || nameMatch;
			});
			setFilteredData(newFilteredData);
		}
		else {
			// Handle the case when the search query is empty (no filtering)
			setFilteredData(data);

		}
	}
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		// Run filterData when the component mounts and whenever searchQuery changes
		filterData();

	}, [searchQuery, filteredData]);

	const columns = [
		{ field: 'reservation_id', headerName: 'ID', flex: 0.4 },
		{ field: 'bookid', headerName: 'Book ID' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
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
			flex: 1,
		},
		{
			field: 'address',
			headerName: 'Address',
			flex: 1,
		}
	];

	if (!filteredData) {
		return <div>Loading...</div>;
	}
	return (
		<div style={{ width: '100%', maxWidth: "1280px", overflowY: 'auto' }}>
			<Topbar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={filterData}
			/>
			<TableBox filteredData={filteredData} topic="Book Reservations" columns={columns} id="reservation_id" />
		</div>
	);
};

export default ReservedBooks;