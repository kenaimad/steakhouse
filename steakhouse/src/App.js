import Navbar from './layout/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/steaks" element={<Homepage />} />
            <Route path="/burgers" element={<Homepage />} />
            <Route path="/fries" element={<Homepage />} />
            <Route path="/drinks" element={<Homepage />} />
            <Route path="/delivery" element={<Homepage />} />
            <Route path="/contact" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
