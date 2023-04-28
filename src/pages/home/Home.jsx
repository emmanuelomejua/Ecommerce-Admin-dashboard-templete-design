import Sidebar from '../../componentes/sidebar/Sidebar'
import Navbar from '../../componentes/navbar/Navbar'
import './home.scss'
import Widget from '../../componentes/widgets/Widget'
import Featured from '../../componentes/feadtured/Featured'
import Chart from '../../componentes/chsrt/Chart'
import Table1 from '../../componentes/table/Table'

const Home = () => {
  return (
    <main className='home'>
       <Sidebar/>
    <section className='homeContainer'>
        <Navbar/>
      <section className='widgets'>
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget type='earning'/>
        <Widget type='balance'/>
      </section>
      <section className='charts'>
        <Featured/>
        <Chart title='Last 6 months (Revenue)' aspect={2/1}/>
      </section>
      <section className="listContainer">
        <div className="listTitle">Latest Transaction</div>
        <Table1/>
      </section>
    </section>
      
    </main>
  )
}

export default Home
