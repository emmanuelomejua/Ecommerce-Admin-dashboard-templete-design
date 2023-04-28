import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from './pages/single/Single'
import New from "./pages/new/New";

const App = () => {
  return (
    <main className="app">
      
      <Routes>

        <Route exact path="/">
          <Route exact index element={<Home/>}/>
          <Route exact path="login" element={<Login/>}/>
        </Route>

        <Route exact path="users">
          <Route exact index element={<List/>}/>
          <Route exact path=':userId' element={<Single/>}/>
          <Route exact path='new' element={<New/>}/>
        </Route>

        <Route exact index element={<List/>}/>
          <Route exact path=':productId' element={<Single/>}/>
          <Route exact path='new' element={<New/>}/>
        <Route path="product">
        </Route>

      </Routes>
      
    </main>
  );
}

export default App;
