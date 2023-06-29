import './App.css';
import React from 'react';
import AddBook from './components/AddBooks/addBooks';
import Display from './components/Display/display';
import Header from './components/Header/header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorite from './components/ShowFav/showFav';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Display />}></Route>
        <Route path='/add-books' element={<AddBook />}></Route>
        <Route path='/dashboard' element={<Display />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
