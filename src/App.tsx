import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import PostPage from "./components/PostPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ListPage from "./components/ListPage";
import MainPage from "./components/MainPage";

//Header
//Routes - HomeRoute / MainPage(maybe need '/:id') / CreatePage(text editting & stickers)/ maybe need another route to edit('edit/:id' with <EditPage/>) / ListPage

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journal" element={<MainPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
