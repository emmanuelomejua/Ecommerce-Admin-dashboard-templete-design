import {Sidebar, Navbar} from '../../components'
import img from '../../assets/1671696742908.jpg'
import './new.scss'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'

const New = ({inputs, title}) => {

  const [file, setFile] = useState('')

  return (
    <main className='new'>
      <Sidebar/>
      <section className='newContainer'>
        <Navbar/>
        <section className="nTop">
          <h2>{title}</h2>
        </section>
        <section className="nBottom">
          <div className="nLeft">
            <img src={file ? URL.createObjectURL(file) : img} alt="" className="" />
          </div>

          <div className="nRight">
            <form>
            <div className="formInput">
                <label htmlFor='file'>
                 Image <DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type='file' id='file' style={{display: 'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
              </div>

            {
              inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} min={input.min}/>
              </div>
              ))
            }
           
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
