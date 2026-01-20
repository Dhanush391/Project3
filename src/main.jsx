import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import StudentApp from './Studentapp.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path='/page1' element={<Page1 />} />
  <Route path='/page2' element={<Page2 />} />
  <Route path='/page3' element={<StudentApp/>} />
 </Routes>
 </BrowserRouter>
)