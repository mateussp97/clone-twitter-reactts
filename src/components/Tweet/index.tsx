import React from "react";

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon style={{ marginLeft: "32px", marginRight: "8px" }} />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Vitor Eiji</strong>
            <span>@vtrduque</span>
            <Dot />
            <time>25 de Março</time>
          </Header>
          <Description>Foguete não tem ré!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              462
            </Status>
            <Status>
              <LikeIcon />
              556
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
