import { Navigate } from "react-router-dom";
import { useAuth } from "../CustomHooks/useAuth";

export const ProtectedSignUpRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    // user is not authenticated
    return <Navigate to="/profile" />;
  }
  return children;
};
