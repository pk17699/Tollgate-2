import './App.css';
import Header from './components/Header/header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPlayer from './components/AddPlayer/addPlayer';
import ShowPlayer from './components/ShowPlayer/showPlayer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ShowPlayer />}></Route>
        <Route path='/addPlayer' element={<AddPlayer />}></Route>
        <Route path='/showPlayer' element={<ShowPlayer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;