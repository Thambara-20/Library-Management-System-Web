import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@mui/material';
import Topbar from '../../Components/Topbar';
import TableBox from '../../Components/TableBox';
import { fetchBookData, deleteBook} from '../../services/bookService'; // Update the import path
import { Link } from 'react-router-dom';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';


const Books = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState([]);
	

	// Define the fetchData function to fetch book data from the backend API
	const fetchData = async () => {
		try {
			const data = await fetchBookData();
			console.log(data);
			setFilteredData(data);
			
		} catch (error) {
			console.error('Error fetching book data:', error);
			
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (bookId) => {
		const isConfirmed = window.confirm('Are you sure you want to delete this book?');
		if (isConfirmed) {
			try {
				await deleteBook(bookId);

				// Update the filtered data after successful deletion
				fetchData();
			} catch (error) {
				console.error('Error deleting book:', error);
			}
		}
	};




	const filterData = () => {
		if (searchQuery) {
			const newFilteredData = filteredData.filter((book) => {
				const idMatch = book.id.toString().toLowerCase().includes(searchQuery.toLowerCase());
				const titleMatch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
				return idMatch || titleMatch;
			});
			setFilteredData(newFilteredData);
		} else {
			// Reset to the original data when the search query is empty
			fetchData(); // Refetch the data from the backend API
		}
	};

	useEffect(() => {
		// Run filterData whenever searchQuery changes
		filterData();
	}, [searchQuery]);



	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.4 },
		{ field: 'ISBN', headerName: 'ISBN' ,flex: 0.9 },
		{
			field: 'title',
			headerName: 'Title',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'author',
			headerName: 'Author',
			flex: 0.7,
		},
		{
			field: 'publisher',
			headerName: 'Publisher',
			flex: 1,
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
		},
		{
			field: 'status',
			headerName: 'Availability',
			cellClassName: 'available-column--cell',
			renderCell: (cellValues) => (
				(cellValues.row.status) ?<><GppGoodIcon  /><h8 style={{  color:"#2a9461" }}
				>Available</h8></>: <><GppBadIcon  /><h8 style={{  color: 'darkred' }}
				>Reserved</h8></>
				
		
			),
			flex: 0.7,
		},
		{
			field: 'Delete',
			renderCell: (cellValues) => (
				<Button
					variant="contained"
					style={{ backgroundColor: 'darkred', color: 'white' }}
					onClick={() => handleDelete(cellValues.row.id)}
				>
					Delete
				</Button>
			),flex: 0.7,
		},
		{
			field: 'Update',
			renderCell: (cellValues) => (
				<Link to={`/admin/bookManagement/updatebook/${cellValues.row.id}`}>
					<Button color="primary" variant="contained">
						Update
					</Button>
				</Link>

			),flex: 0.7,
		},
	];

	return (
		<div style={{ width: '99%', overflowY: 'auto' }}>
			<Topbar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={filterData}
			/>
			<TableBox filteredData={filteredData} topic="BookManager" columns={columns} data-aos="fade-up" />
		</div>
	);
};

export default Books;
