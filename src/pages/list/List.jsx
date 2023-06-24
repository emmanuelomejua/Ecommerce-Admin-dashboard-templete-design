import { Sidebar, Navbar, DataTable} from '../../components'
import './list.scss'

const List = ({title}) => {
  return (
    <main className='list'>
      <Sidebar/>
      <section className="listContainer">
        <Navbar/>
        <DataTable title={title}/>
      </section>
    </main>
  )
}

export default List
