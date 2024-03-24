import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>There is an error</p>
      <Link to={"/"} className="text-red-600">
        Go home
      </Link>
    </div>
  );
};

export default ErrorPage;
