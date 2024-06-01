import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import MyButton from "../MyButton";
import { useQuery } from "react-query";

export const ButtonStyle = styled(Button)`
  &.ant-btn-default {
    font-family: "Noto Serif", serif;
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    color: var(--white);
    padding: 10px 40px;
    height: fit-content;
    &:hover,
    &:focus,
    &:active {
      color: var(--grey-light);
    }

    // Style the span inside the button
    span {
      text-decoration: none; // Remove underline
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
`;

const Stickers = () => {
  const limit = 5;
  const [page, setPage] = useState<number>(1);

  interface DataType {
    title: string;
    url: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Sticker",
      dataIndex: "url",
      key: "url",
      render: (text) => <img src={text} alt="Sticker" style={{ width: "50px" }} />,
    },
  ];

  const { data, isLoading } = useQuery(["stickers", page], () => getStickers(page, limit), {
    keepPreviousData: true,
  });

  const getStickers = async (page: number, limit: number) => {
    const apiKey = "gRsIU8cXoEQLPymOgO4ayfzGAKvCtS2Y";
    let offset = (page - 1) * limit;
    const {
      data: { data: stickers },
    } = await axios.get(`https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}&offset=${offset}&limit=${limit}`);

    const formattedData: DataType[] = stickers.map((sticker: any) => ({
      title: sticker.title,
      url: sticker.images.fixed_height.url,
    }));
    return formattedData;
  };

  if (!data) {
    return null;
  }

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  return (
    <>
      <Table loading={isLoading} columns={columns} dataSource={data} pagination={false} />
      <Buttons>
        <MyButton testId={"back-btn"} onClick={() => setPage((prev) => prev - 1)} disabled={page == 1}>
          Back
        </MyButton>
        <MyButton testId={"forward-btn"} onClick={() => setPage((prev) => prev + 1)}>
          Forward
        </MyButton>{" "}
      </Buttons>
    </>
  );
};

export default Stickers;
