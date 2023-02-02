import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import logo from "./assets/Vector.png";
import BackBox from "./components/BackBox";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={logo} alt="wobot-ai-logo" />
      </div>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/create_account" element={<SignUp />} />
      </Routes>
      <div className={styles.backbox}>
        <BackBox />
      </div>
    </div>
  );
}

export default App;
