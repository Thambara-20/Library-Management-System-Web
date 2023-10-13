import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import {AddBookButton} from './Button';


function TableBox({ topic=false, filteredData, columns ,id=undefined,height=false}) {
    return (
        <Box m="5px" style={{
            // background: (id) ? 'linear-gradient(60deg, rgb(255, 255, 255) 0%, rgb(201, 201, 201)  80%)' : 'none',
            padding: '5px 10px 5px 10px',
            borderRadius:'5px'
          }}>
              {topic ? (
                <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="10px 0 10px">
                    <h2  sx={{color:'black'}}>{topic}</h2>
                    <Typography variant="subtitle1">
                        Welcome to the {topic}
                    </Typography>
                </Box>
            ) : null}


            {topic === "BookManager" && (
                <AddBookButton />
            )}
            <Box

                m="20px 0 10px 0"
                height= {height ? `${height}`: "74vh!important"}
                width="100%"
                data-aos="fade-up"
                sx={{
                    '& .MuiDataGrid-root': {
                      boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.5)",
                      transition: "transform 0.3s", // Add a transition for smooth scaling
                    },
                    '& .MuiDataGrid:hover': {
                      transform: "scale(1.1)", // Increase the size by 10% on hover (adjust as needed)
                    },
                 
                    '& .MuiDataGrid-cell': {
                       
                        borderBottom: '1px solid black',
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${grey[900]} !important`,
                    
                        display:(topic)? true :'none',
                    },
                    '& .MuiDataGrid-toolbarContainer': {
                        backgroundColor: grey[500],
                        borderBottom: '2px black solid',
                        borderTop:"none"
                       
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
                    getRowId={(id==="bookid") ? (row) => row.bookid :(id==="txId") ? (row) => row.txId :(id==="barrow_id") ? (row) => row.barrow_id:(id==="reservation_id") ? (row) => row.reservation_id: undefined} 
                    rows={filteredData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}

                />
            </Box>
        </Box>
    )
}

export default TableBox