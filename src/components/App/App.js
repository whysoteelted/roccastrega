import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Topbar from '../Topbar/Topbar';

export default function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <div className="root-wrapper">
          <div className="header-wrapper">
            <Topbar />
          </div>
          <div className="main-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
