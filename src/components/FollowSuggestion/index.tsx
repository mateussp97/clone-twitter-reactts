import React from "react";

import { Container, Avatar, Info, FollowButton } from "./styles";

interface Props {
  name: string;
  nickname: string;
  avatarUrl: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, avatarUrl }) => {
  return (
    <Container>
      <div>
        <Avatar src={avatarUrl} alt={name} />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
