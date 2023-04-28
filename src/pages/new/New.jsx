import Sidebar from '../../componentes/sidebar/Sidebar'
import Navbar from '../../componentes/navbar/Navbar'
import img from '../../assets/1671696742908.jpg'
import './new.scss'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

const New = () => {
  return (
    <main className='new'>
      <Sidebar/>
      <section className='newContainer'>
        <Navbar/>
        <section className="nTop">
          <h2>Add New User</h2>
        </section>
        <section className="nBottom">
          <div className="nLeft">
            <img src={img} alt="" className="" />
          </div>

          <div className="nRight">
            <form>
            <div className="formInput">
                <label htmlFor='file'>
                 Image <DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type='file' id='file' style={{display: 'none'}}/>
              </div>

              <div className="formInput">
                <label>Username</label>
                <input type='text' placeholder='john_tim'/>
              </div>

              <div className="formInput">
                <label>FullName</label>
                <input type='text' placeholder='John Timothy'/>
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type='email' placeholder='johntim2k@outlook.com'/>
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type='number' min={1} placeholder='+234 823 12345'/>
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type='password'/>
              </div>

              <div className="formInput">
                <label>Address</label>
                <input type='text' placeholder='Elton St. 234 Garden Yd. New York'/>
              </div>

              <div className="formInput">
                <label>Country</label>
                <input type='text'  placeholder='USA'/>
              </div>

              <button>Send</button>
            </form>
          </div>
        </section>
        New
      </section>
     
    </main>
  )
}

export default New
