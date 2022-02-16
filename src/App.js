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
import user2 from './assets/img/user2.png';
import user3 from './assets/img/user3.png';
import user4 from './assets/img/user4.png';

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
            userAvatar: user4,
            description: '',
        },{
            userID : '2',
            firstName: 'Janay',
            lastName: 'Wright',
            email: 'JanayWright@gmail.com',
            password: '111111',
            userAvatar: user1,
            description: 'Janay Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    },{
            userID : '3',
            firstName: 'Anthony',
            lastName: 'J.Yeung',
            email: 'Anthony@gmail.com',
            password: '111111',
            userAvatar: user2,
            description: 'Janay Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
        },{
            userID : '4',
            firstName: 'Ella',
            lastName: 'Alderson',
            email: 'Alderson@gmail.com',
            password: '111111',
            userAvatar: user3,
            description: 'Janay Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
        }
    ])
    }, [])


    useEffect(() => {
        localStorage.posts = JSON.stringify([{
            id: '1',
            category: "#Typography",
            userID: '2',
            topic: "Humane Typography in the Digital Age",
            text: "Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?",
        },{
            id: '2',
            category: "#Typography",
            topic: "Humane Typography in the Digital Age",
            text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
            userID: "2",
        },{
            id: '3',
            category: "#Typography",
            topic: "Johannes Gutenberg: The Birth of Movable...",
            text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
            userID: "3",
        },{
            id: '4',
            category: "#Typography",
            topic: "Johannes Gutenberg: The Birth of Movable...",
            text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
            userID: "3",
        },{
            id: '5',
            category: "#Typography",
            topic: "Johannes Gutenberg: The Birth of Movable...",
            text: "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
            userID: "4",
        }
        ])
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
