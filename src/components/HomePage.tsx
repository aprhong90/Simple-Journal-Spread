import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/journal");
    }
  }, [user]);

  return (
    <div className="HomePage">
      <h1>The Journal</h1>
      <button onClick={signInWithGoogle}>go make your own journal</button>
    </div>
  );
};

export default HomePage;
