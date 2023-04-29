import Sidebar from '../../componentes/sidebar/Sidebar'
import Navbar from '../../componentes/navbar/Navbar'
import Datatable from '../../componentes/datatale/datatable'
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
