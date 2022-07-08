import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route exact path="/" element={<ProductList/>}/>
              <Route path="/add" element={<AddProduct/>}/>
              <Route path="/edit/:id" element={<EditProduct/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
 
export default App;