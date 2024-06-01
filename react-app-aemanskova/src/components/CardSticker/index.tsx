import { FC } from "react";
import { IStickers } from "../DynamicPagination/stickers.interface";
import styled from "styled-components";

const CardStyled = styled.div`
  height: 100px;
  background-color: var(--light-blue);
`;

const CardSticker: FC<{ data: IStickers }> = ({ data }) => (
  <CardStyled>
    <span>{data.title}</span>
    <img src={data.url} alt={data.title} style={{ width: "50px" }} />
  </CardStyled>
);
export default CardSticker;
