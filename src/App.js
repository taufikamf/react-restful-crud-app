import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
