import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import './navbar.scss'
import avater from '../../assets/1671696742908.jpg'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
          <div className='search'>
            <input type='text' placeholder='Search...' />
            <SearchOutlined/>
          </div>

          <div className='items'>
              <div className='item'>
              <LanguageOutlined/>
              English
              </div>

              <div className='item'>
              <DarkModeOutlined/>
              </div>

              <div className='item'>
                <FullscreenExitOutlined/>
              </div>

              <div className='item'>
                <NotificationsNoneOutlined/>
                <div className='counter'>1</div>
              </div>

              <div className='item'>
                <ChatBubbleOutlineOutlined/>
                <div className='counter'>2</div>
              </div>

              <div className='item'>
                <ListAltOutlined/>
              </div>

              <div className='item'>
                <img src={avater} alt='Avater' className='avater'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default navbar
