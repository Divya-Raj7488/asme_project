import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/mainpage" element={<Mainpage/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
