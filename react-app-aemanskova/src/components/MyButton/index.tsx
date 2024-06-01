import React, { FC } from "react";
import { Button } from "antd";
import styled from "styled-components";

const ButtonStyle = styled(Button)`
  &.ant-btn-default {
    font-family: "Noto Serif", serif;
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    color: var(--white);
    padding: 10px 40px;
    height: fit-content;
    width: max-content;
    &:focus-visible,
    &:active {
      color: var(--grey-light);
    }
    &:focus {
      color: none;
    }

    span {
      text-decoration: none;
    }
    @media (max-width: 991px) {
      padding: 5px 10px;
    }
  }

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: var(--light-blue);
  }
`;
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  testId?: string;
};

const MyButton: FC<Props> = ({ children, onClick, disabled, testId }) => {
  return (
    <ButtonStyle data-testid={testId} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default MyButton;
