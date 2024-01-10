import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import PaginationBasic from './components/Pagination';
import TablesEg from './components/TablesEg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Cards/>
      <PaginationBasic/> */}
      <TablesEg/>
    </>
  )
}

export default App
