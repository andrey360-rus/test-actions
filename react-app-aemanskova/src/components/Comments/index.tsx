import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "../Comments/Comments.css";
import styled from "styled-components";

interface Post {
        id: number;
        title: string;
        shortText: string;
        longText: string;
        userAvatar: string;
        postImage: string;
}

export const CommentsContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 1000px;
`;

export const ListStyle = styled(List)`
        &.ant-list {
                width: 800px;
                margin: 0 auto;
        }
        &.ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-title > a:hover {
                color: var(--blue);
        }
        &.ant-pagination .ant-pagination-item-active {
                font-weight: 600;
                background-color: #ffffff;
                border-color: var(--blue) !important;
        }
`;

export const NewPagination = styled.div`
        &.ant-pagination .ant-pagination-item-active a {
                background-color: #ffffff;
                border-color: var(--blue) !important;
        }
`;

export const ListItemStyle = styled(List.Item)``;

const Comments: React.FC = () => {
        const [data, setData] = useState<Post[]>([]);

        useEffect(() => {
                axios.get("http://localhost:3000/api/posts")
                        .then((response) => {
                                console.log(response.data);
                                setData(response.data);
                        })
                        .catch((error) => {
                                console.error("Ошибка при получении данных из API:", error);
                        });
        }, []);

        const IconText = ({ Icon, text }: { Icon: React.FC; text: string }) => (
                <Space>
                        <Icon />
                        {text}
                </Space>
        );

        return (
                <CommentsContainer>
                        <ListStyle
                                className="custom-list"
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                        onChange: (page) => {
                                                console.log(page);
                                        },
                                        pageSize: 3,
                                }}
                                dataSource={data}
                                renderItem={(item: Post) => (
                                        <ListItemStyle
                                                className="custom-list-item"
                                                key={item.title}
                                                actions={[
                                                        <IconText
                                                                Icon={StarOutlined}
                                                                text="156"
                                                                key="list-vertical-star-o"
                                                        />,
                                                        <IconText
                                                                Icon={LikeOutlined}
                                                                text="156"
                                                                key="list-vertical-like-o"
                                                        />,
                                                        <IconText
                                                                Icon={MessageOutlined}
                                                                text="2"
                                                                key="list-vertical-message"
                                                        />,
                                                ]}
                                                extra={
                                                        <img
                                                                className="custom-img"
                                                                src={item.postImage}
                                                                alt="postImage"
                                                        />
                                                }
                                        >
                                                <List.Item.Meta
                                                        avatar={<Avatar src={item.userAvatar} />}
                                                        title={<a href={item.title}>{item.shortText}</a>}
                                                        description={item.longText}
                                                />
                                        </ListItemStyle>
                                )}
                        />
                </CommentsContainer>
        );
};

export default Comments;
