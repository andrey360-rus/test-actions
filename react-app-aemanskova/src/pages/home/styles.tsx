import styled from "styled-components";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div<ContentContainerProps>`
  height: 400px;
  color: #fff;

  font-family: "Rubik", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 400px;
  text-align: center;
  background: ${(props) => `url(${props.background}) center/cover`};

  h3 {
    position: relative;
    display: inline-block;
    padding: 10px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    color: inherit; /* Inherit color from the parent ContentContainer */
  }
`;

export const StyledCarousel = styled(Carousel)`
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonLink = styled(Link)`
  font-family: "Noto Serif", serif;
  background-color: var(--blue);
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 10px 40px;
  height: fit-content;
  &:hover,
  &:focus,
  &:active {
    color: var(--light-blue);
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
  // Style the span inside the button
  span {
    text-decoration: none; // Remove underline
  }
`;
