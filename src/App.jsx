import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

import { AppHeader, LoginHeader, GuestHeader} from './components/Header';
import AppFooter from './components/Footer';

import AppLandingHero from './components/LandingHero';
import Choice from './routes/Choice';
import Scan from './routes/Scan';
import Fridge from './routes/Fridge';
import Fridge2 from './routes/Fridge2';
import User from './routes/User';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header id="header">
       <HeaderSwitcher />
      </header>
      <main>
      <Routes>         
        <Route path="/" element={<AppLandingHero/>} />
        <Route path="/choice" element={<Choice/>} />
        <Route path="/scan" element={<Scan/>} />
        <Route path="/fridge" element={<Fridge/>} />
        <Route path="/fridge2" element={<Fridge2/>} />
        <Route path="/fridgeGuest" element={<Fridge/>} />
        <Route path="/user" element={<User/>}/>

      </Routes>
      </main>
      <footer id="footer">
        <AppFooter/>
      </footer>
    </div>
    </BrowserRouter>
  )
}

function HeaderSwitcher() {
  const location = useLocation(); 
  if(location.pathname === "/" || location.pathname === "/choice" ){
    return <AppHeader/>;
  }
  if(location.pathname === "/fridgeGuest"){
    return <GuestHeader/>;
  }
  return <LoginHeader/>;
}


export default App
