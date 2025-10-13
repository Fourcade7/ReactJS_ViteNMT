import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './main.css'
import "./i18n"


import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './home/Home'
import { CategoryScreen } from './category/Category'
import { ProductScreen } from './product/Product'
import { ItemScreen } from './detail/Detail'
import { AboutScreen } from './about/About'
import AdminScreen from './adminp/adminp'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
        <Route path='/category' element={<CategoryScreen></CategoryScreen>}></Route>
        <Route path='/product' element={<ProductScreen></ProductScreen>}></Route>
        <Route path='/detail' element={<ItemScreen></ItemScreen>}></Route>
        <Route path='/about' element={<AboutScreen></AboutScreen>}></Route>
        <Route path='/admin' element={<AdminScreen></AdminScreen>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}




function AppOrginal() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Button variant="primary">NEW</Button>
      </div>
      <h1>INVOKER</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
