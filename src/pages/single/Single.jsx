import './single.scss'
import {Sidebar, Navbar, Chart, Table1 } from '../../components'
import img from '../../assets/1671696742908.jpg'


const Single = () => {
  return (
    <main className='single'> 
      <Sidebar/>
      <section className="sContainer">
        <Navbar/>
        <section className="sTop">

          <div className="tLeft">
            <span className='editBtn'>Edit</span>
            <h2 className="sTitle">Information</h2>
            <div className="item">
              <img src={img} alt="" className="itemImg" />
              <div className='details'>
                <h2 className="itemTitle">Emmanuel Omejua</h2>

                <div className="dItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">eomejua@outlook.com</span>
                </div>

                <div className="dItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 12312345</span>
                </div>

                <div className="dItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. New York</span>
                </div>

                <div className="dItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              
              </div>
            </div>
          </div>

          <div className="tRight">
            <Chart aspect={3/1} title='User Transaction (Last 6 months)'/>
          </div>
        </section>
        <div className="sBottom">
        <h2 className="sTitle">Information</h2>
          <Table1/>
        </div>
      </section>
    </main>
  )
}

export default Single
