import { Sidebar, Navbar, Widget, Featured, Chart, Table1} from '../../components'
import './home.scss'


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
