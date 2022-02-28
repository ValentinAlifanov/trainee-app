import {Route, Routes } from "react-router-dom";
import React, {createContext, useState} from "react";

import Main from "./components/Main/Main"
import AuthLogin from "./components/AuthLogin/AuthLogin";
import Create from "./components/Create/Create";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticles from "./components/AddArticles/AddArticles";
import Profile from "./components/Profile/Profile";
import ReadPost from "./components/ReadPost/ReadPost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.css';

export const UserAuthContext = createContext(null);

function App() {
    const [userAuth, setUserAuth] = useState(localStorage.userLogIn ? (true) : (false))
    const routes = [
        {path: "/", component: <Main />},
        {path: "/authLogin", component: <AuthLogin />},
        {path: "/create", component: <Create />},
        {path: "/myArticles", component: <MyArticles />},
        {path: "/addArticles", component: <AddArticles />},
        {path: "/profile", component: <Profile />},
        {path: "/readPost/:postID", component: <ReadPost />},
    ]

    const providerValues = {
        userAuth,
        setUserAuth
    }

      return (
      <>
          <UserAuthContext.Provider value={providerValues} >
            <Header />
              <Routes>
                  {routes.map(item =>
                    <Route path={item.path} element={item.component} key={item.path}/> )}
              </Routes>
            <Footer />
          </UserAuthContext.Provider>
      </>
  )

}

export default App;
