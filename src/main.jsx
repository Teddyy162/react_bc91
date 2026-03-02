import { createRoot } from 'react-dom/client'
//css cho toàn ứng dụng
import './assets/css/index.css'

import HomePage from './pages/HomePage'
import DataBinding from './pages/DataBinding'
import CarDemo from './pages/StateDemo/CarDemo'
//import react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HeaderHome } from './components/HeaderHome'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import BaiTapGioHang from './pages/LiftingStateUpDemo/BaiTapGioHang/BaiTapGioHang'
import AdminTemplate from './Templates/AdminTemplate'
import AdminDashBoard from './pages/AdminPage/AdminDashBoard'
import UserManagement from './pages/AdminPage/UserManagement'
import ProductManagement from './pages/AdminPage/ProductManagement'
import HomeTemplate from './Templates/HomeTemplate'
import DemoUserNavigate from './pages/HookRouting/DemoUserNavigate'
import Profile from './pages/Profile'
import ForgotPass from './pages/ForgotPass'
import Detail from './pages/Detail'
import GetAllProductPage from './pages/Api/GetAllProductPage'
import Search from './pages/Search'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import ProductAddNewEdit from './pages/ProductAddnewEdit'
//import store và react redux : để nối với ứng dụng
import { Provider } from 'react-redux';
import { store } from './redux/store'
import DemoChangeNumber from './pages/ReduxDemo/DemoChangeNumber'
import DemoChangeCarRedux from './pages/ReduxDemo/DemoChangeCarRedux'
import TinderClone from './pages/StateDemo/TinderClone'
import DemoTinderCloneRedux from './pages/ReduxDemo/DemoTinderCloneRedux'
import LiftingStateUpDemo from './pages/LiftingStateUpDemo/LiftingStateUpDemo'
import BTXemChiTietRedux from './pages/ReduxDemo/BTXemChiTietRedux/BTXemChiTietRedux'
import ExerciseCarStore from './pages/LiftingStateUpDemo/ExerciseCarStore'
import BaiTapGioHangRedux from './pages/ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux'



createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      {/* <HeaderHome /> */}
      <Routes>
        <Route path='' element={<HomeTemplate />} >
          <Route index element={<GetAllProductPage />} ></Route>
          <Route path='index' element={<HomePage />} ></Route>
          <Route path='data-binding' element={<DataBinding />}></Route>
          <Route path='change-carcolor' element={<CarDemo />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='cart' element={<BaiTapGioHang />}></Route>
          <Route path='demo-useNavigate' element={<DemoUserNavigate />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='forgot-pass' element={<ForgotPass />}></Route>
          <Route path='detail/:id' element={<Detail />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='redux-changenumber' element={<DemoChangeNumber />}></Route>

          <Route path='redux-change-car' element={<DemoChangeCarRedux />}></Route>
          <Route path='tinder' element={<TinderClone />}></Route>

          <Route path='redux-tinder-clone' element={<DemoTinderCloneRedux />}></Route>
          <Route path='lifting-stateup' element={<LiftingStateUpDemo />}></Route>
          <Route path='bt-xem-chi-tiet-redux' element={<BTXemChiTietRedux />}></Route>
          <Route path='bt-gioHang' element={<BaiTapGioHang />}></Route>
          <Route path='bt-gioHang-redux' element={<BaiTapGioHangRedux />}></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path='admin' element={<AdminTemplate />}>
          <Route index element={<AdminDashBoard />}></Route>
          <Route path='users' element={<UserManagement />}></Route>
          <Route path='products' element={<ProductManagement />}></Route>
          <Route path='products/addNew' element={<CreateProduct />}></Route>
          <Route path='products/edit/:id' element={<EditProduct />}></Route>
          <Route path='product/:id?' element={<ProductAddNewEdit />}></Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>

)

