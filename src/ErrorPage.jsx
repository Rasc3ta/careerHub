import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ErrorPage = (props) => {
  return (
    <div>
      <h2 className="text-3xl text-red-500 font-extrabold">bad ☹☹</h2>
      <br />
      <NavLink to={"/"}>
        <button className="p-4 bg-red-400 text-white font-bold text-2xl m-4 active:text-red-400 active:bg-green-400 ">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
