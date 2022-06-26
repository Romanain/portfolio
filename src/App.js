import './sass/App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home'
import Project from './Pages/Project';
import MyWork from './Components/MyWork';
import Publications from './Components/Publications';

function App() {
  document.title = "Portfolio Romain Toebosch";

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/project/:projectID" element={<Project />} />
            <Route path="*" element={<Navigate to="/portfolio/" />} />
            <Route path="/portfolio/projects-and-courses/" element={<MyWork amount={100} margin={'6rem'} />} />
            <Route path="/portfolio/publications/" element={<Publications amount={100} margin={'6rem'} />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;