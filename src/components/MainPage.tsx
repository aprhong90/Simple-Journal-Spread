import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./MainPage.css";

//can see most recent posting first, with scrolling down, can see old posts.
//can edit

const MainPage = () => {
  const { user } = useContext(AuthContext);
  return <div className="MainPage">Welcome, {user?.displayName}</div>;
};

export default MainPage;
