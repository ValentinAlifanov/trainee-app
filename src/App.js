import {Route, Routes } from "react-router-dom";
import {useEffect, useState} from "react";

import Main from "./components/Main/Main"
import AuthLogin from "./components/AuthLogin/AuthLogin";
import Create from "./components/Create/Create";
import MainLogIn from "./components/MainLogIn/MainLogIn";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticles from "./components/AddArticles/AddArticles";
import Profile from "./components/Profile/Profile";

import user1 from './assets/img/user1.png';

import './App.css';

function App() {
    localStorage.check = false;
    localStorage.userLogIn = '';

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    useEffect(() => {
        localStorage.users = JSON.stringify([{
            userID : '1',
            firstName: 'First',
            lastName: 'First',
            email: 'First@gmail.com',
            password: '111111',
            userAvatar: '',
            description: '',
        },{
            userID : '2',
            firstName: 'Janay',
            lastName: 'Wright',
            email: 'JanayWright@gmail.com',
            password: '111111',
            userAvatar: user1,
            description: 'Janay Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
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
