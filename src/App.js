import {Route, Routes } from "react-router-dom";
import {useEffect, useState} from "react";

import Main from "./components/Main/Main"
import AuthLogin from "./components/AuthLogin/AuthLogin";
import Create from "./components/Create/Create";
import MainLogIn from "./components/MainLogIn/MainLogIn";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticles from "./components/AddArticles/AddArticles";
import Profile from "./components/Profile/Profile";

import './App.css';


function App() {
    useEffect(() => {
        localStorage.check = false;
    });

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    useEffect(() => {
        localStorage.users = JSON.stringify([{
            userID : '11111111',
            firstName: 'First',
            lastName: 'First',
            email: 'First@gmail.com',
            password: '111111',
        }])
    }, [])
  return (
      <>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/authLogin" element={<AuthLogin users={users}/>} />
                  <Route path="/create" element={<Create users={users} setUsers={setUsers} />} />
                  <Route path="/mainLogIn" element={<MainLogIn />} />
                  <Route path="/myArticles" element={<MyArticles />} />
                  <Route path="/addArticles" element={<AddArticles />} />
                  <Route path="/profile" element={<Profile />} />
              </Routes>

      </>
  )

}

export default App;
