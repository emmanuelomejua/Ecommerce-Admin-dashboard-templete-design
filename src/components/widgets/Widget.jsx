import './widget.scss'
import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOn, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Widget = ({type}) => {
    let data;

    const amount = 100
    const diff = 20

    switch(type){
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlined className='icon' style={{backgroundColor: 'rgba(0, 128, 0, .8)'}}/>
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartOutlined className='icon' style={{ backgroundColor: 'rgba(143, 13, 143, 0.666)'}}/>
            };
            break;
        case 'earning':
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOn className='icon' style={{backgroundColor: 'green'}}/>
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletOutlined className='icon'  style={{ backgroundColor: 'blueviolet'}}/>
            };
            break;

        default:
            return null;
    }

  return (
    <div className='widget'>
      <div className='left'>
       <span className='title'>{data.title}</span>
       <span className='counter'>{data.isMoney && '$'} {amount}</span>
       <span className='link'>{data.link}</span>
      </div>

      <div className='right'>
        <div className='percentage positive'>
        <KeyboardArrowUp/>
          {diff} %
        </div>
       {data.icon}
      </div>

    </div>
  )
}

export default Widget
