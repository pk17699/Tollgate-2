import './App.css';
import React from 'react';
import AddStudent from './components/AddStudents/addStudents';
import Display from './components/Display/display';
import Header from './components/Header/header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Display />}></Route>
        <Route path='/add-students' element={<AddStudent />}></Route>
        <Route path='/showStudent' element={<Display />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
