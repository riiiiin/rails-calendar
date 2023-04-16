import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

// const baseURL = "http://localhost:3001/test";

const App = () => {

  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //     console.log(response.data)
  //   });
  // }, []);

  // if (!post) return null;

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;