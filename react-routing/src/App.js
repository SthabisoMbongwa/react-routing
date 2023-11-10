import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path="/Contact" element={<h1>This is my contact page.</h1>} />
    </Routes>
  );
}

export default App;
