import { createRoot } from 'react-dom/client'
import { HeaderHome } from './components/HeaderHome'
import HomePage from './pages/HomePage'
import Baitaplayout from './pages/Baitaplayout'
import HeaderBTLayout from './components/HeaderBTLayout'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import RenderCondition from './pages/RenderCondition'


createRoot(document.getElementById('root')).render(
  <div>
    {/* <HomePage /> */}
    {/* <Baitaplayout/> */}
    {/* <DataBinding/> */}
    {/* <HandleEvent/> */}
    <RenderCondition/>
  
  </div>
)
