import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import AddBookButton from './Button';


function TableBox({ topic=false, filteredData, columns ,id=true,height=false}) {
    return (
        <Box m="15px">
            {topic ? (
                <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="10px 0 10px">
                    <Typography variant="h3">{topic}</Typography>
                    <Typography variant="subtitle1">
                        Welcome to the {topic}
                    </Typography>
                </Box>
            ) : null}


            {topic === "BookManager" && (
                <AddBookButton />
            )}
            <Box

                m="30px 0 0 0"
                height= {height ? `${height}`: "70vh!important"}
                data-aos="fade-up"
                sx={{
                    '& .MuiDataGrid-root': {
                        boxShadow:"5px 5px 15px 0px rgba(0,0,0,0.5)"
                    },
                    '& .MuiDataGrid-cell': {
                       
                        borderBottom: '1px solid black',
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${grey[900]} !important`,
                        display:(topic)? true :'none',
                    },

                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: grey[500],
                        borderBottom: 'none',
                        borderTop:"none"
                       
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: grey[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        display:(topic)? true :'none',
                        borderTop: 'none',
                        backgroundColor: grey[500],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${grey[200]} !important`,
                      
                    },
                }}
            >
                <DataGrid  
                    getRowId={(!id) ? (row) => row.txId : undefined} 
                    rows={filteredData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}

                />
            </Box>
        </Box>
    )
}

export default TableBox