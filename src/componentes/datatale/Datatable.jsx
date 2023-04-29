import './datatable.scss';
import { userColumns, userRows } from '../../data';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const actionColumn = [
    {
      field: 'action', 
      headerName: 'Action', 
      width: 200, 
      renderCell: () => {
        return(
          <div className='cellAction'>
            <Link to='/users/id' className='link'>
              <div className='viewBtn'>View</div>
            </Link>
           
            <div className='deleteBtn'>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New User
        <Link to='/users/new' className='link'>
          Add New
        </Link>
      </div>
    <DataGrid
    rows={userRows}
    columns={userColumns.concat(actionColumn)}
    pageSize={8}
    pageSizeOptions={[8]}
    paginationModel={{ page: 0, pageSize: 8 }}
    checkboxSelection
    className='datagrid'
  />
    </div>
  )
}

export default Datatable
