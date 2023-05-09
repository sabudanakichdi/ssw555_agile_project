import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route {...rest} element={token ? element : <Navigate to="/MyAccount" />} />
  );
};

export default PrivateRoute;
