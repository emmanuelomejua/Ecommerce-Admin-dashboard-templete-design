import Login from "./pages/login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from './pages/single/Single'
import New from "./pages/new/New";
import { productInput, userInput } from "./formSrc";
import './style/dark.scss'
import { useContext } from "react";
import { darkModeContext } from "./context/darkContext";

const App = () => {
  const {darkMode} = useContext(darkModeContext)
  return (
    <main className={darkMode ? 'app dark': 'app'}>
      
      <BrowserRouter>
        <Routes>

          <Route exact path="/">
            <Route exact index element={<Home/>}/>
            <Route exact path="login" element={<Login/>}/>
          </Route>

          <Route exact path="users">
            <Route exact index element={<List title='Add New User'/>}/>
            <Route exact path=':userId' element={<Single/>}/>
            <Route exact path='new' element={<New inputs={userInput} title='Add New User'/>}/>
          </Route>

            <Route exact path="product">
            <Route exact index element={<List title='Add New Product'/>}/>
            <Route exact path=':productId' element={<Single/>}/>
            <Route exact path='new' element={<New inputs={productInput} title='Add New Product'/>}/>
        
          </Route>

        </Routes>
      </BrowserRouter>
      
    </main>
  );
}

export default App;
