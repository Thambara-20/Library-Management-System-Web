import { mockDataContacts } from '../../assets/users/mockData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Topbar from '../../Components/Topbar';
import TableBox from '../../Components/TableBox';
import { Button } from '@mui/material';


const Books = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState(mockDataContacts);
    
    


	const filterData = () => {
		// Clear previous search results by resetting filteredData to initial data
		let newFilteredData = mockDataContacts;

		if (searchQuery) {
			newFilteredData = mockDataContacts.filter((user) => {
				const idMatch = user.id.toString().toLowerCase().includes(searchQuery.toLowerCase());
				const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());

				return idMatch || nameMatch;
			});
			setFilteredData(newFilteredData);
		}
		else {
			// Handle the case when the search query is empty (no filtering)
			setFilteredData(mockDataContacts);
		}

	}

	useEffect(() => {
		// Run filterData when the component mounts and whenever searchQuery changes
		filterData();
	},[searchQuery, filterData]);
    
	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.4 },
		{ field: 'isbn', headerName: 'ISBN' },
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
			field: "Delete",
			renderCell: (cellValues) => {
				return (
					<Button
						variant="contained"
						style={{ backgroundColor: 'darkred', color: 'white' }}
						onClick={() => {
							const isConfirmed = window.confirm("Are you sure you want to delete?");
							if (isConfirmed) {
								
								// Perform the deletion action here
								// You can call your `handleClick` function or any other action
								// when the user confirms deletion.
								// handleClick(event, cellValues);
							}
						}}>Delete</Button>);}
		},
		{
			field: "Update",
			renderCell: (cellValues) => {
				return (
					<Button
						variant="contained"
						color="primary"
						onClick={(event) => {
							// handleClick(event, cellValues);
						}}>Update</Button>);}
		}
	];

	return (
		<div style={{ width: '100%', overflowY: 'auto' }}>
			<Topbar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={filterData}
			/>
			<TableBox filteredData={filteredData} topic="BookManager" columns={columns} data-aos="fade-up"/>
		</div>
	);
};

export default Books;
