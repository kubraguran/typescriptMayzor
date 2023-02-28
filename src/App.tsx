import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import UsersTable from './components/UsersTable';
import SingleUser from './components/SingleUser';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';


const App: React.FC = () => {



  return (
    <div>
     
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn email={''} />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="userstable" element={<UsersTable />} />
            <Route path = "mainpage" element = {<MainPage />} />
            <Route path = "*" element = {<ErrorPage />} />
          </Routes>

        </BrowserRouter>
      
    </div>
  );

};

export default App;
