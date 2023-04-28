import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    total: 1100,
  },
  {
    name: 'Febuary',
    total: 2210,
  },
  {
    name: 'March',
    total: 2290,
  },
  {
    name: 'April',
    total: 2000,
  },
  {
    name: 'May',
    total: 1700,
  },
  {
    name: 'June',
    total: 2500,
  },
];

const Chart = ({aspect, title}) => {


    return (
      <section className='chart'>
        <h4 className='title'>{title}</h4>
        <ResponsiveContainer width={600} aspect={aspect}>
         <AreaChart width={600} height={350} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
          
            </defs>
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" className='chatGrid'/>
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
      </section>
 
    )
  
}

export default Chart
