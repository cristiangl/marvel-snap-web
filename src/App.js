import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-full mx-auto p-5'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card/:name' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
