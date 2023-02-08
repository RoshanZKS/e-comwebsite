import {Routes, Route} from 'react-router-dom';
import { About } from './components/About';
import { AdminUser } from './components/AdminUser';
import { AuthProvider } from './components/auth';
import { Featured } from './components/Featured';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Profile } from './components/Profile';
import { RequireAuth } from './components/RequireAuth';
import { UserDetail } from './components/UserDetail';
import { Users } from './components/Users';
 
function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetail/>}/>
          <Route path='admin' element={<AdminUser/>}/>
        </Route>
        <Route path='profile' element={<RequireAuth> <Profile/> </RequireAuth>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
      </AuthProvider>
  );
}

export default App;
