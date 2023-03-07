import * as React from 'react'
import{ Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {Link} from 'react-router-dom'
import './MUITable.scss'

interface Column {
  id: 'flag' | 'name' | 'region' | 'population' | 'language' | 'showMoreButton'
  label: string
}

const columns: readonly Column[] = [
  { id: 'flag', label: 'Flag' },
  { id: 'name', label: 'Name'  },
  {
    id: 'region',
    label: 'Region',
  },
  {
    id: 'population',
    label: 'Population',
  },
  {
    id: 'language',
    label: 'Language',
  },
  {
    id: 'showMoreButton',
    label: 'More details',
  }
]

export default function MUITable({ data }: any) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
    
  return (
    <Paper className='table__wrapper'>
      <TableContainer >
        <Table className='table' stickyHeader aria-label="sticky table">
          <TableHead className='table__head'>
            <TableRow className='table__row'>
              {columns.map((column) => (
                  <TableCell
                    className='table__cell'
                      key={column.id}
                      id={column.id}
                  >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className='table__body'>
            {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => {
              const languageArray = row?.languages && Object.values(row.languages)
              return (
                <TableRow className='table__row' key={index}>
                  <TableCell className='table__cell'>
                    <img className='image--flag' src={row?.flags?.png} alt={row?.flags?.alt} />
                  </TableCell>
                  <TableCell className='table__cell'>{row?.name?.common}</TableCell>
                  <TableCell className='table__cell'>{row.region}</TableCell>
                  <TableCell className='table__cell'>{row.area}</TableCell>
                  <TableCell className='table__cell'>
                    <ul>
                      {languageArray?.map((lang: any, index: number) => (
                        <li key={index}>{lang}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className='table__cell'><Link to={`/country/${row?.name?.common}`}><MoreHorizIcon /></Link></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className='pagination'
      />
    </Paper>
  )
}
