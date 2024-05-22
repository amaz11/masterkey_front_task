import './navbar.css';

const Navbar = ({ setTask }) => {
  return (
    <div className="navbar">
      <button onClick={() => setTask(false)}>Task 1</button>
      <button onClick={() => setTask(true)}>Task 2</button>
    </div>
  );
};

export default Navbar;
