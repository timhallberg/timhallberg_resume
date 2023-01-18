import { Route, Routes } from 'react-router-dom';
import './App.css';
import Education from './Components/Education/Education';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/utbildning" element={ <Education/> }/>
       </Routes>
    </div>
  );
}

export default App;