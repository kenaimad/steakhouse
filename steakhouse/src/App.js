import Navbar from './layout/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
