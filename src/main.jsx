import { createRoot } from 'react-dom/client'
import { HeaderHome } from './components/HeaderHome'
import HomePage from './pages/HomePage'
import BaiTapLayout from './pages/BaiTapLayout'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import React from 'react'
import RenderCondition from './pages/RenderCondition'
import ChangeNumber from './pages/StateDemo/ChangeNumber'
import StyleComponentDemo from './pages/StyleComponent/StyleComponentDemo'
//css cho toàn ứng dụng
import './assets/css/index.css'
import ChangeFontSize from './pages/StateDemo/ChangeFontSize'
import CarDemo from './pages/StateDemo/CarDemo'
import TinderClone from './pages/StateDemo/TinderClone'
import Propdemo from './pages/PropsDemo/Propdemo'
import RenderWithMap from './pages/PropsDemo/RenderWithMap'
import ProductItem from './pages/PropsDemo/BTRenderProduct/ProductItem'
import ProductList from './pages/PropsDemo/BTRenderProduct/ProductList'
import LiftingStateUpDemo from './pages/LiftingStateUpDemo/LiftingStateUpDemo'
import ExerciseCarStore from './pages/LiftingStateUpDemo/ExerciseCarStore'
import BaiTapGioHang from './pages/LiftingStateUpDemo/BaiTapGioHang/BaiTapGioHang'
import GetAllProductPage from './pages/Api/GetAllProductPage'
import ReactFormDemo from './pages/ReactFormDemo/ReactFormDemo'
import DemoFormikYup from './pages/ReactFormDemo/DemoFormikYup'



createRoot(document.getElementById('root')).render(
  <div>
    {/* <HomePage /> */}
    {/* <BaiTapLayout /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <RenderCondition /> */}
    {/* <ChangeNumber /> */}
    {/* <StyleComponentDemo /> */}
    {/* <ChangeFontSize /> */}
    {/* <CarDemo /> */}
    {/* <TinderClone /> */}
    {/* <Propdemo /> */}
    {/* <RenderWithMap /> */}
    {/* <ProductList/> */}
    {/* <LiftingStateUpDemo/> */}
    {/* <ExerciseCarStore/> */}
    {/* <BaiTapGioHang/> */}
    {/* <GetAllProductPage/> */}
    {/* <ReactFormDemo/> */}
    <DemoFormikYup/>
  </div>
)

