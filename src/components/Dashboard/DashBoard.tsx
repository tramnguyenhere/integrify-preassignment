import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'



const DashBoard = ({ data }: any) => {
  
  console.log(data)
  
  const rows: GridRowsProp = data

  const getRowId = (row: any, index: any) => {
    return index
  }

  const columns: GridColDef[] = [
    {field: 'flag', headerName: 'Flag', width:150},
    {field: 'name', headerName: 'Name', width:150},
    {field: 'region', headerName: 'Region', width:150},
    {field: 'population', headerName: 'Population', width:150},
    {field: 'language', headerName: 'Language', width:150},
  ]
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  )
}

export default DashBoard

