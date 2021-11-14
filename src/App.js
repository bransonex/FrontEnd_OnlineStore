import './App.css';
import NavBar from "./components/navBar"
import Footer from "./components/footer"
import Catalog from "./components/catalog"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>

      <Footer></Footer>
      
<h1>Welcome to 3°i NFT'S!</h1>
    </div>
  );
}

export default App;
