import "./page404.scss";
import img from "../../../public/404Page.svg"
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <img src={img} alt="404page" />
      <Link to={"/"} className="back">Back to Dashboard</Link>
    </div>
  );
};

export default Page404;
