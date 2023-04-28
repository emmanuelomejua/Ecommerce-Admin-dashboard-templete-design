import './datatable.scss';
import { userColumns, userRows } from '../../data';
import { DataGrid } from '@mui/x-data-grid';

const Datatable = () => {

  const actionColumn = [
    {
      field: 'action', 
      headerName: 'Action', 
      width: 200, 
      renderCell: () => {
        return(
          <div className='cellAction'>
            <div className='viewBtn'>View</div>
            <div className='deleteBtn'>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
    <DataGrid
    rows={userRows}
    columns={userColumns.concat(actionColumn)}
    pageSize={8}
    paginationModel={{ page: 0, pageSize: 8 }}
    checkboxSelection
  />
    </div>
  )
}

export default Datatable
