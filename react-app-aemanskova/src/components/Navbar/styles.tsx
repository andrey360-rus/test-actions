import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Switch } from "antd";

export const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const HamburgerMenu = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 992px) {
    display: none;
  }
`;
export const HamburgerMenuLink = styled(Link)`
  padding: 0;
  margin: 0;
  display: block;
  line-height: 0;
  font-weight: 600;
  //width: max-content;
  //display: flex;
  //align-items: center;
  //gap: 20px;
  color: var(--black);
  &:focus {
    background-color: var(--white);
  }
  &:hover {
    color: var(--grey-light);
  }
`;

export const HamburgerMenuItem = styled(motion.li)`
  list-style-type: none;
`;

export const HamburgerMenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const HamburgerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  gap: 1.5rem;
`;

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
  @media (max-width: 991px) {
    &.ant-menu {
      display: none;
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

export const MenuLogout = styled.button`
  border: 0;
  background-color: inherit;
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

export const StyledSwitch = styled(Switch)`
  &:where(.css-dev-only-do-not-override-1g853jt).ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background: var(--light-blue);
  }
  &:where(.css-dev-only-do-not-override-1g853jt).ant-switch.ant-switch-checked {
    background: var(--light-blue);
  }
  @media (max-width: 991px) {
    & {
      margin-top: 1rem;
    }
  }
`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
