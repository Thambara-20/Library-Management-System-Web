import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import AddBookButton from './Button';


function TableBox({ topic, filteredData, columns }) {
    return (
        <Box m="15px">
            <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="10px 0 10px" >
                <Typography variant="h3" >{topic}</Typography>
                <Typography variant="subtitle1">
                    Welcome to the {topic}
                </Typography>
            </Box>

            {topic === "BookManager" && (
                <AddBookButton />
            )}
            <Box

                m="30px 0 0 0"
                height="70vh"
                data-aos="fade-up"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                    
                        borderBottom: '1px solid black', 
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${grey[900]} !important`,
                    },

                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: grey[500],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: grey[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: grey[500],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${grey[200]} !important`,
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