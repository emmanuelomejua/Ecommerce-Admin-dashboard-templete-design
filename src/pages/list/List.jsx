import Sidebar from '../../componentes/sidebar/Sidebar'
import Navbar from '../../componentes/navbar/Navbar'
import Datatable from '../../componentes/datatale/datatable'
import './list.scss'

const List = () => {
  return (
    <main className='list'>
      <Sidebar/>
      <section className="listContainer">
        <Navbar/>
        <Datatable/>
      </section>
    </main>
  )
}

export default List
