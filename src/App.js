import './sass/App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home'

function App() {
  document.title = "Portfolio Romain Toebosch";

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;