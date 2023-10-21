import { mockDataContacts } from '../../../assets/users/mockData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Topbar from '../../../Components/Topbar';
import TableBox from '../../../Components/TableBox';
import { getUsersData } from '../../../services/authService';
import { Button } from '@mui/material';
import UserUpdate from './UserUpdatePage';

const Users = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const [searchQuery, setSearchQuery] = useState('');
	const [data, setData] = useState([]); // [
	const [filteredData, setFilteredData] = useState(data);
	const [currentUser, setCurrentUser] = useState({});
	const [userUpdate, setUserUpdate] = useState(false);

	const filterData = () => {
		let newFilteredData = [data];

		if (searchQuery) {
			newFilteredData = data.filter((user) => {
				const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
				const emailMatch = user.email.toLowerCase().includes(searchQuery.toLowerCase());

				return nameMatch || emailMatch;
			});
			setFilteredData(newFilteredData);
		}
		else {
			// Handle the case when the search query is empty (no filtering)
			setFilteredData(data);
		}
	}

	const handleUpdate = async (name) => {
	
			try {
				setUserUpdate(true);
				setCurrentUser(data.find((user) => user.name === name));
			} catch (error) {
				console.error('Error updating user:', error);
			}

	}

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getUsersData();
				console.log(data);
				setData(data);
				setFilteredData(data)
			} catch (error) {
				console.error('Get users failed:', error);
			}
		};

		getData();
	}, []);

	useEffect(() => {
		// Run filterData when the component mounts and whenever searchQuery changes
		filterData();
	}, [searchQuery], [filteredData]);

	const columns = [
		{ field: 'name', headerName: 'Name', flex: 0.4 },


		{
			field: 'phone_number',
			headerName: 'Phone No.',
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
		},
		{
			field: 'status',
			headerName: 'User Update',
			cellClassName: 'available-column--cell',
			renderCell: (cellValues) => (
				<Button
					variant="contained"
					style={{ backgroundColor: 'rgb(100, 100, 100)', color: 'white' }}
					onClick={() => handleUpdate(cellValues.row.name)}
				>
					Check...
				</Button>


			),
			flex: 0.7,
		},

	];

	return (
		<div style={{ width: '100%', maxWidth: "1280px", overflowY: 'auto' }}>
			<Topbar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={filterData}
			/>
			{userUpdate ? <UserUpdate user={currentUser} setupdateUser={setUserUpdate}/>: <TableBox filteredData={filteredData} topic="UserManager" columns={columns} id="name" />}
			
		</div>
	);
};

export default Users;
