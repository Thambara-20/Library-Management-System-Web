import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function TableBox({topic,filteredData,columns}) {
    return (
        <Box m="15px">
            <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="10px 0 10px" >
                <Typography variant="h3" >{topic}</Typography>
                <Typography variant="subtitle1">
                    Welcome to the UserManager
                </Typography>
            </Box>
            <Box
                data-aos="fade-up"
                m="30px 0 0 0"
                height="75vh"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .name-column--cell': {
                        color: grey[800],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: grey[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: grey[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: grey[700],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${grey[200]} !important`,
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${grey[800]} !important`,
                    },
                    
                }}
            >
                <DataGrid
                    rows={filteredData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    
                />
            </Box>
        </Box>
    )
}

export default TableBox