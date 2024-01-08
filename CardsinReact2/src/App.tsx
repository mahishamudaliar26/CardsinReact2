import { useState } from 'react'
import DataTable from 'react-data-table-component';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import PaginationBasic from './components/Pagination';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards/>
      <PaginationBasic/>
      
    </>
  )
}

export default App
