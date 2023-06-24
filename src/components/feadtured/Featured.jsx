import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './featured.scss'


const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVert fontSize='small'/>
      </div>

      <div className='bottom'>
          <div className='featuredChart'>
           <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
          </div>
          <p className='title'>Total sales made today</p>
          <p className='amount'>$4200</p>
          <p className='desc'>Previous transactons processing. Last payment may not be included</p>

          <div className='summary'>

            <div className='item'>
            <div className='itemTitle'>Target</div>

            <div className='itemResult negative'>
                <KeyboardArrowDown fontSize='small'/>
                 <div className='resultAmount'>$30.4k</div>
            </div>
            </div>

            <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
                <KeyboardArrowUp fontSize='small'/>
                <div className='resultAmount'>$30.4k</div>
            </div>
            </div>

            <div className='item'>
            <div className='itemTitle'>Last month</div>
            <div className='itemResult positive'>
                <KeyboardArrowUp fontSize='small'/>
                <div className='resultAmount'>$30.4k</div>
            </div>
            </div>
         </div>


      </div>
    </div>
  )
}

export default Featured
