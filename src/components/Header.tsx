import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="Header">
      <div>The Journal</div>
      <nav>
        <ul>
          <li>
            <Link to={"/journal"}>Main Page</Link>
          </li>
          <li>
            <Link to={"/create"}>Create</Link>
          </li>
          <li>
            <Link to={"/list"}>List of Journals</Link>
          </li>
          <li>
            <button onClick={signOut}>Sign-Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
