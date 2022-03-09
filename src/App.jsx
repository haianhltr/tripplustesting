import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Resources from "./pages/ResourcePage/Resources";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Error from "./pages/error/Error";
import Post from "./pages/Post/Post";
import Testing from "./pages/error/Testing";
// import ResourcePage from "./pages/ResourcePage";

const App = () => {
  
//   const user = false;


  return (
<Router>
  <Routes>
  <Route exact path='/' element={<Home/>} />

  <Route exact path='/resources' element={<Resources/>} />
  <Route exact path='/products' element={<Products/>} />
  <Route path='/post/:id' element={<Post/>} />
  <Route path='/testing' element={<Testing/>} />
  <Route path = '*' element= {<Error/>}/>
  </Routes>
</Router>

  );
};

export default App;