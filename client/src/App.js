import {Route, Routes } from "react-router-dom";

import Main from "./components/Main/Main"
import AuthLogin from "./components/AuthLogin/AuthLogin";
import Create from "./components/Create/Create";
import MainLogIn from "./components/MainLogIn/MainLogIn";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticles from "./components/AddArticles/AddArticles";
import Profile from "./components/Profile/Profile";
import ReadPost from "./components/ReadPost/ReadPost";

import './App.css';


function App() {
      return (
      <>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/authLogin" element={<AuthLogin />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/mainLogIn" element={<MainLogIn />} />
                  <Route path="/myArticles" element={<MyArticles />} />
                  <Route path="/addArticles" element={<AddArticles />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path={"/readPost/:postID"} element={<ReadPost />} />
              </Routes>
      </>
  )

}

export default App;
