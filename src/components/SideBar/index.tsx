import React from "react";
import List from "./../List/index";
import FollowSuggestion from "./../FollowSuggestion/index";
import News from "./../News/index";
import StickyBox from "react-sticky-box";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <News
                heading="Assunto do Momento em Brasil"
                title="#BigBrotherBrasil"
              />,
              <News
                heading="Covid-19 • AO VIVO"
                title="São Paulo: as últimas notícias sobre a pandemia"
              />,
              <News
                heading="Música • AO VIVO"
                title="Feliz aniversário, Elton John 🎂"
              />,
            ]}
          />

          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion
                name="Pedro Palhari"
                nickname="@pedropalhari"
                avatarUrl="https://avatars.githubusercontent.com/u/6961214?v=4"
              />,
              <FollowSuggestion
                name="Vitor Eiji"
                nickname="@vtrduque"
                avatarUrl="https://avatars.githubusercontent.com/u/18485461?v=4"
              />,
              <FollowSuggestion
                name="Lucas Santana"
                nickname="@santanalc"
                avatarUrl="https://avatars.githubusercontent.com/u/38021698?v=4"
              />,
            ]}
          />

          <List
            title="Tópicos para seguir"
            elements={[
              <FollowSuggestion
                name="Big Brother Brasil"
                nickname="Reality show"
              />,
              <FollowSuggestion name="Pop" nickname="Gênero musical" />,
              <FollowSuggestion name="Anime" nickname="Tudo sobre anime" />,
              <FollowSuggestion name="Flamengo" nickname="Time de futebol" />,
              <FollowSuggestion name="Futebol" nickname="Esporte" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
