import { Sidebar, Navbar, Datatable} from '../../components'
import './list.scss'

const List = ({title}) => {
  return (
    <main className='list'>
      <Sidebar/>
      <section className="listContainer">
        <Navbar/>
        <Datatable title={title}/>
      </section>
    </main>
  )
}

export default List
