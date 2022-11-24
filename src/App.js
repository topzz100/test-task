import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAgenda from './pages/AddAgenda';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-agenda" element={<AddAgenda/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
