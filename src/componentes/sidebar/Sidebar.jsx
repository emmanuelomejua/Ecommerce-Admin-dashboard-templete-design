import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsOutlined, PersonOutline, PsychologyOutlined, SettingsApplicationsOutlined, SettingsSystemDaydream, Store } from '@mui/icons-material'
import './sidebar.scss'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <main className='sidebar'>
      <div className='top'>
        <span className='logo'>
            <Link to='/' className='link'>Admin</Link>
        </span>
      </div>
      <hr/>

      <div className='center'>
        <ul>
        <p className='title'>MAIN</p>
            <li>
            <Dashboard className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className='title'>LIST</p>

            <li>
                <PersonOutline className='icon'/>
                <Link to='/users' className='link'>
                <span>Users</span>
                </Link>
               
            </li>
            <li>
                <Store className='icon'/>
                <Link to='/product' className='link'> 
                <span>Products</span>
                </Link>
               
            </li>
            <li>
                <CreditCard className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShipping className='icon'/>
                <span>Delivery</span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
                <InsertChart className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsOutlined className='icon'/>
                <span>Notifications</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
                <SettingsSystemDaydream className='icon'/>
                <span>System health</span>
            </li>
            <li>
                <PsychologyOutlined className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsOutlined className='icon'/>
                <span>Setings</span>
            </li>
            <p className='title'>USER</p>
            <li>
                <AccountCircleOutlined className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToApp className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>
         <div className='colorOptions'></div>
         <div className='colorOptions'></div>
         <div className='colorOptions'></div>
      </div>
    </main>
  )
}

export default Sidebar
