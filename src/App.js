import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AddTask from './AddTask';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/add' element={<AddTask></AddTask>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// for git!!
// make two repos for front and backend
// git init backend and frontend 
// follow the git remote things for both backend and front end 
