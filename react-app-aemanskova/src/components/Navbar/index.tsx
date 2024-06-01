import { useClickAway } from "react-use";
import { useContext, useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { DownOutlined } from "@ant-design/icons";
import {
  AUTH_ROUTE,
  COMMENTS_ROUTE,
  FORM_ROUTE,
  HOME_ROUTE,
  MEDITATESTEPS_ROUTE,
  PAGINATION_ROUTE,
  PDF_ROUTE,
  STICKERS_ROUTE,
} from "../../app/routing/config.tsx";
import {
  HamburgerMenuLink,
  HamburgerMenuItem,
  HamburgerMenuList,
  NavbarWrapper,
  MenuItem,
  MenuLink,
  MenuStyle,
  HamburgerMenu,
  StyledSwitch,
  MenuLogout,
  HamburgerButtonContainer,
} from "./styles.tsx";
import { AuthContext } from "../../../AuthContext.tsx";
import { Dropdown, Space } from "antd";
import authInstance from "../../auth.ts";
import { useNavigate } from "react-router-dom";

const routes: any = [
  {
    title: "Home",
    href: HOME_ROUTE,
  },
  {
    title: "Comments",
    href: COMMENTS_ROUTE,
  },
  {
    title: "Meditate",
    href: MEDITATESTEPS_ROUTE,
  },
  {
    title: "Stickers",
    href: STICKERS_ROUTE,
  },
  {
    title: "Form",
    href: FORM_ROUTE,
  },
  {
    title: "Pdf",
    href: PDF_ROUTE,
  },
  {
    title: "Pagination",
    href: PAGINATION_ROUTE,
  },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useClickAway(ref, () => setOpen(false));

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");
  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  const logout = async () => {
    try {
      const response = await authInstance.post("auth/logout/");
      if (response.status === 200) {
        localStorage.removeItem("access_token");
        setIsAuth(false);
        navigate("/auth");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const items = [
    {
      key: "1",
      label: <MenuLink to={AUTH_ROUTE}>Profile</MenuLink>,
    },
    {
      key: "2",
      label: <MenuLogout onClick={logout}>Logout</MenuLogout>,
    },
  ];

  return (
    <div>
      <HamburgerMenu ref={ref}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HamburgerMenuList>
                {routes.map((route: any, idx: number) => {
                  return (
                    <HamburgerMenuItem
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                    >
                      <HamburgerMenuLink onClick={() => setOpen((prev) => !prev)} to={route.href}>
                        <span>{route.title}</span>
                      </HamburgerMenuLink>
                    </HamburgerMenuItem>
                  );
                })}
                {isAuth && (
                  <HamburgerButtonContainer>
                    <HamburgerMenuItem>
                      <HamburgerMenuLink to={AUTH_ROUTE}>Profile</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                      <MenuLogout onClick={logout}>Logout</MenuLogout>
                    </HamburgerMenuItem>
                  </HamburgerButtonContainer>
                )}

                {!isAuth && (
                  <HamburgerMenuItem>
                    <HamburgerMenuLink to={AUTH_ROUTE}>Login</HamburgerMenuLink>
                  </HamburgerMenuItem>
                )}
              </HamburgerMenuList>
            </motion.div>
          )}
        </AnimatePresence>
        <StyledSwitch onChange={changeTheme} />
      </HamburgerMenu>

      <MenuStyle>
        <NavbarWrapper>
          {routes.map((route: any, index: number) => {
            return (
              <MenuItem key={index}>
                <MenuLink to={route.href}>{route.title}</MenuLink>
              </MenuItem>
            );
          })}
        </NavbarWrapper>
        <NavbarWrapper>
          {isAuth && (
            <MenuItem>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hover me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </MenuItem>
          )}

          {!isAuth && (
            <MenuItem>
              <MenuLink to={AUTH_ROUTE}>Login</MenuLink>
            </MenuItem>
          )}

          <MenuItem>
            <StyledSwitch onChange={changeTheme} />
          </MenuItem>
        </NavbarWrapper>
      </MenuStyle>
    </div>
  );
};

export default Navbar;
