import { mockDataContacts } from '../../assets/users/mockData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Topbar from '../../Components/Topbar';
import TableBox from '../../Components/TableBox';

const PendingApprovals = () => {
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
}, [searchQuery],[filteredData]);

const columns = [
	{ field: 'id', headerName: 'ID', flex: 0.4 },
	{ field: 'registrarId', headerName: 'Registrar ID' },
	{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		cellClassName: 'name-column--cell',
	},

	{
		field: 'phone',
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
	}
];

return (
	<div style={{ width: '100%', maxWidth: "1280px", overflowY: 'auto' }}>
		<Topbar
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			handleSearch={filterData}
		/>
		<TableBox filteredData = {filteredData} topic = "Pending Approvals" columns = {columns}/>
		</div>
);
};

export default PendingApprovals;