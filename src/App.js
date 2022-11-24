import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAgenda from './pages/AddAgenda';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Agenda from './pages/Agenda';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-agenda" element={<AddAgenda/>}/>
        <Route path="/:id" element={<Agenda/>}/>
      </Routes>
    </div>
  );
}

export default App;
