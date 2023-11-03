import { Link } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin panel</span>
      </Link>
      <div className="icons">
        <button>
          <img src="/search.svg" alt="" className="icon" />
        </button>
        <button>
          <img src="/app.svg" alt="" className="icon" />
        </button>
        <button>
          <img src="/expand.svg" alt="" className="icon" />
        </button>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Jane</span>
        </div>
        <button>
          <img src="/settings.svg" alt="" className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar
