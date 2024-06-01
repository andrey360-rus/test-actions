import { Link } from "react-router-dom";
import {
  COMMENTS_ROUTE,
  STICKERS_ROUTE,
  HOME_ROUTE,
  MEDITATESTEPS_ROUTE,
  FORM_ROUTE,
  PDF_ROUTE,
  PAGINATION_ROUTE,
} from "../../app/routing/config";
import { Menu } from "antd";
import styled from "styled-components";
import MyButton from "../MyButton";
import { useState } from "react";

const menuKeys = ["Home", "Comments", "Meditate", "Stickers", "Form", "Pdf", "Pagination"];

export const MenuStyle = styled(Menu)`
  &.ant-menu {
    font-family: "Rubik", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: transparent;
    }
  }
`;

export const MenuItem = styled(Menu.Item)`
  &.ant-menu-item {
    font-weight: 600;
    width: max-content;
    color: var(--black);
    height: max-content;
    background-color: var(--white);

    &:hover {
      background-color: var(--white);
      color: var(--grey-light);
    }
  }
`;

export const MenuLink = styled(Link)`
  &.ant-menu-link {
    padding: 0;
    margin: 0;
    display: block;
    line-height: 0;
    &:focus {
      background-color: var(--white);
    }
    &:hover {
      color: var(--grey-light);
    }
  }
`;
interface StyledProps {
  height?: string;
}
const NavbarWrapper = styled.div<StyledProps>`
  display: flex;
  gap: 20px;

  /* background-color: #219ebc;
    height: ${({ height }) => height ?? "300px"}; */
`;

interface NavbarProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setIsAuth, isAuth }) => {
  const handleAuthToggle = () => {
    setIsAuth((prevIsAuth: boolean) => !prevIsAuth);
  };

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const generateRoute = (key: any) => {
    const routes: any = {
      Home: HOME_ROUTE,
      Comments: COMMENTS_ROUTE,
      Meditate: MEDITATESTEPS_ROUTE,
      Stickers: STICKERS_ROUTE,
      Form: FORM_ROUTE,
      Pdf: PDF_ROUTE,
      Pagination: PAGINATION_ROUTE,
    };

    return routes[key] as string;
  };
  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <MenuStyle>
      <NavbarWrapper>
        {menuKeys.map((key, index) => {
          console.log("key:", key, "index:", index);
          return (
            <MenuItem key={index}>
              <MenuLink to={generateRoute(key)}>{key}</MenuLink>
            </MenuItem>
          );
        })}
      </NavbarWrapper>
      <NavbarWrapper>
        <MyButton testId={"button-auth"} onClick={handleAuthToggle}>
          {isAuth ? "Logout" : "Login"}
        </MyButton>
        <MyButton testId={"button-change-theme"} onClick={changeTheme}>
          {"Change theme"}
        </MyButton>
      </NavbarWrapper>
    </MenuStyle>
  );
};

export default Navbar;
