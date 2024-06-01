import { FC, Fragment, useEffect } from "react";
import { IStickers } from "./stickers.interface";
import CardSticker from "../CardSticker";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";

const BlockObserver = styled.div`
  height: 40px;
  background-color: black;
`;

const DynamicPagination: FC = () => {
  const LIMIT_STICKERS = 10;

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const fetchStickers = async (pageParam: number) => {
    const offset = (pageParam - 1) * LIMIT_STICKERS;
    const apiKey = "gRsIU8cXoEQLPymOgO4ayfzGAKvCtS2Y";
    const {
      data: { data: stickers, pagination },
    } = await axios.get(
      `https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}&offset=${offset}&limit=${LIMIT_STICKERS}`,
    );
    const formattedData: IStickers[] = stickers.map((sticker: any) => ({
      title: sticker.title,
      url: sticker.images.fixed_height.url,
    }));

    return { data: formattedData, pagination };
  };

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ["stickers"],
    ({ pageParam = 1 }) => fetchStickers(pageParam),
    { getNextPageParam: (lastPage) => lastPage.pagination.offset / lastPage.pagination.count + 1 },
  );
  if (!data) {
    return null;
  }

  return (
    <>
      <h1 data-testid={"list-header-stickers"}>List Stickers</h1>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.data.map((sticker) => (
            <CardSticker data={sticker} key={sticker.title}></CardSticker>
          ))}
        </Fragment>
      ))}
      {isLoading && <span>Loading ...</span>}
      {!isLoading && <BlockObserver ref={ref}></BlockObserver>}
    </>
  );
};

export default DynamicPagination;
