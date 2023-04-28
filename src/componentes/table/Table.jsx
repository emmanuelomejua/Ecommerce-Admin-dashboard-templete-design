import './table.scss'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { rows } from '../../data'

const Table1 = () => {


  return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{minWidth: 650}} aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell className='tablecell'>Tracking ID</TableCell>
                    <TableCell className='tablecell'>Product</TableCell>
                    <TableCell className='tablecell'>Customer</TableCell>
                    <TableCell className='tablecell'>Date</TableCell>
                    <TableCell className='tablecell'>Amount</TableCell>
                    <TableCell className='tablecell'>Payment Method</TableCell>
                    <TableCell className='tablecell'>Status</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell className='tablecell'>{row.id}</TableCell>
                        <TableCell className='tablecell'>
                            <div className='cellWrapper'>
                                <img src={row.img} alt='' height={50}/>
                                {row.product}
                            </div>
                        </TableCell>
                        <TableCell className='tablecell'>{row.customer}</TableCell>
                        <TableCell className='tablecell'>{row.date}</TableCell>
                        <TableCell className='tablecell'>{row.amount}</TableCell>
                        <TableCell className='tablecell'>{row.method}</TableCell>
                        <TableCell className='tablecell'>
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                    ))
              
                }
               
            </TableBody>
            </Table>
        </TableContainer>

  )
}

export default Table1
