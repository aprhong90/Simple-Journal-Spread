import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div>The Journal</div>
      <nav>
        <ul>
          <li>Main Page</li>
          <li>Create</li>
          <li>List of Journals</li>
          <li>Sign-Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
