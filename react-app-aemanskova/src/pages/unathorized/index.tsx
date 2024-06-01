import { MenuLink } from "../../components/Navbar/styles.tsx";
import { AUTH_ROUTE } from "../../app/routing/config.tsx";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext.tsx";

const UnauthorizedPage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <h2>You aren't authorized</h2>
      <MenuLink to={AUTH_ROUTE}> {isAuth ? "Logout" : "Login"}</MenuLink>
    </div>
  );
};

export default UnauthorizedPage;
